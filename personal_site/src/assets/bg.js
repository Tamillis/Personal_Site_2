const bg = (() => {
  // constants
  const THRESHOLD = 4;
  const BALL_COUNT = 100;
  const RADIUS = 15;
  const SPEED_MIN = 0.01;
  const SPEED_MAX = 0.15;
  const DRAG_COEFF = 0.05;
  const GRAV_COEFF = 20;
  const GRAV_RANGE = 200;
  const BALLS_COLLIDE = true;
  const WRAP = false;
  const DRAW_QUADTREE = false;
  const DRAW_BALLS = true;
  const DRAW_BG = true;

  // modules/quadtree.js
  var Point = class {
    constructor(x, y, r = 1) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
    dist(otherPoint) {
      let dx = otherPoint.x - this.x;
      let dy = otherPoint.y - this.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    distSq(otherPoint) {
      let dx = otherPoint.x - this.x;
      let dy = otherPoint.y - this.y;
      return dx * dx + dy * dy < 0.1 ? 0.1 : dx * dx + dy * dy;
    }
    collides(otherPoint) {
      return this.distSq(otherPoint) < (otherPoint.r + this.r) * (otherPoint.r + this.r);
    }
    normalise() {
      let d = Math.sqrt(this.x * this.x + this.y * this.y);
      this.x /= d;
      this.y /= d;
    }
  };
  var Boundary = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    contains(point) {
      return this.x <= point.x + point.r / 2 && this.w + this.x >= point.x - point.r / 2 && this.y <= point.y + point.r / 2 && this.h + this.y >= point.y - point.r / 2;
    }
  };
  var QuadTree = class _QuadTree {
    constructor(boundary, threshold) {
      this.boundary = boundary;
      this.threshold = threshold;
      this.subtrees = [];
      this.elements = [];
    }
    getElements(quadPoint) {
      if (this.subtrees.length > 0) {
        return this.subtrees.filter((subtree) => subtree.boundary.contains(quadPoint)).map((subtree) => subtree.getElements(quadPoint)).flat();
      } else {
        return this.elements;
      }
    }
    insert(element) {
      if (this.subtrees.length > 0) {
        let subtree = this.subtrees.find((st) => st.boundary.contains(element));
        if (subtree) subtree.insert(element);
        return;
      }
      this.elements.push(element);
      if (this.elements.length >= this.threshold && this.boundary.w > 2 && this.boundary.h > 2) this.splitTree();
    }
    splitTree() {
      let x = this.boundary.x, y = this.boundary.y, w = this.boundary.w, h = this.boundary.h;
      let topLeftBoundary = new Boundary(x, y, w / 2, h / 2);
      let topRightBoundary = new Boundary(x + w / 2, y, w / 2, h / 2);
      let bottomLeftBoundary = new Boundary(x, y + h / 2, w / 2, h / 2);
      let bottomRightBoundary = new Boundary(x + w / 2, y + h / 2, w / 2, h / 2);
      for (let boundary of [topLeftBoundary, topRightBoundary, bottomLeftBoundary, bottomRightBoundary]) {
        let newTree = new _QuadTree(boundary, this.threshold);
        for (let element of this.elements) {
          if (newTree.boundary.contains(element)) newTree.insert(element);
        }
        this.subtrees.push(newTree);
      }
      this.elements = [];
    }
  };

  // modules/billiard.js
  var Billiard = class extends Point {
    constructor(x, y, r) {
      super(x, y, r);
      this.vx = 0;
      this.vy = 0;
      this.range = 50;
      this.grav_coeff = 1;
    }
    areaOfEffect() {
      return new Point(this.x, this.y, this.range * 2);
    }
    gravity(neighbours) {
      let force = new Point(0, 0);
      for (let neighbour of neighbours) {
        if (this != neighbour && this.areaOfEffect().collides(neighbour) && !this.collides(neighbour)) {
          let forceFactor = this.grav_coeff / this.distSq(neighbour);
          let direction = new Point(neighbour.x - this.x, neighbour.y - this.y);
          direction.normalise();
          if (neighbour.isMouse) {
            direction.x *= -3;
            direction.y *= -3;
          }
          force.x += forceFactor * direction.x;
          force.y += forceFactor * direction.y;
        }
      }
      return force;
    }
    collide(other) {
      let dr = this.r + other.r - this.dist(other);
      let normal = new Point(other.x - this.x, other.y - this.y);
      normal.normalise();
      other.x += normal.x * dr / 2;
      other.y += normal.y * dr / 2;
      this.x -= normal.x * dr / 2;
      this.y -= normal.y * dr / 2;
      let dir21 = new Point(other.x - this.x, other.y - this.y);
      let diffViDotDir21 = (other.vx - this.vx) * (other.x - this.x) + (other.vy - this.vy) * (other.y - this.y);
      let dir12 = new Point(this.x - other.x, this.y - other.y);
      let diffViDotDir12 = (this.vx - other.vx) * (this.x - other.x) + (this.vy - other.vy) * (this.y - other.y);
      let distsq = dir21.x * dir21.x + dir21.y * dir21.y;
      let v1fx = this.vx + diffViDotDir21 / distsq * dir21.x;
      let v1fy = this.vy + diffViDotDir21 / distsq * dir21.y;
      let v2fx = other.vx + diffViDotDir12 / distsq * dir12.x;
      let v2fy = other.vy + diffViDotDir12 / distsq * dir12.y;
      this.vx = v1fx;
      this.vy = v1fy;
      other.vx = v2fx;
      other.vy = v2fy;
    }
    move(force) {
      if (force instanceof Point) {
        this.vx += force.x;
        this.vy += force.y;
      }
      this.x += this.vx;
      this.y += this.vy;
    }
    drag(dragVal) {
      this.vx *= 1 - dragVal / 100;
      this.vy *= 1 - dragVal / 100;
    }
  };

  // modules/canvas.js
  var Canvas = class extends Boundary {
    constructor(id, w, h) {
      super(0, 0, w, h);

      this.canvas = document.getElementById(id) ?? document.createElement("canvas");

      this.canvas.width = this.w;
      this.canvas.height = this.h;
      this.offscreenCanvas = document.createElement("canvas");
      this.offscreenCanvas.width = this.w;
      this.offscreenCanvas.height = this.h;
      this.ctx = this.offscreenCanvas.getContext("2d");
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.hasNoColour = false;
      this.hasNoStroke = false;
      this.resize();
    }
    render() {
      this.canvas.getContext("2d").drawImage(this.offscreenCanvas, 0, 0);
      this.ctx.clearRect(0, 0, this.w, this.h);
    }
    resize() {
      this.w = this.canvas.getBoundingClientRect().width;
      this.h = this.canvas.getBoundingClientRect().height;
      this.canvas.width = this.w;
      this.canvas.height = this.h;
      this.offscreenCanvas.width = this.w;
      this.offscreenCanvas.height = this.h;
    }
    colour(fillStyleString) {
      this.hasNoColour = false;
      this.ctx.fillStyle = fillStyleString;
    }
    noColour() {
      this.hasNoColour = true;
    }
    stroke(strokeStyleString, strokeWeight = 1) {
      this.hasNoStroke = false;
      this.ctx.strokeStyle = strokeStyleString;
      this.ctx.lineWidth = strokeWeight;
    }
    noStroke() {
      this.hasNoStroke = true;
    }
    linearGradient(x1, y1, x2, y2) {
      return this.ctx.createLinearGradient(x1, y1, x2, y2);
    }
    radialGradient(x1, y1, r1, r2) {
      return this.ctx.createRadialGradient(x1, y1, r1, x1, y1, r2);
    }
    clear() {
      this.canvas.getContext("2d").clearRect(0, 0, this.w, this.h);
    }
    circle(x, y, r) {
      if (!this.hasNoColour) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
      }
      if (!this.hasNoStroke) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke();
      }
    }
    rect(x, y, w, h) {
      if (!this.hasNoColour) this.ctx.fillRect(x, y, w, h);
      if (!this.hasNoStroke) this.ctx.strokeRect(x, y, w, h);
    }
    line(x1, y1, x2, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
    text(text, x, y, fontSize) {
      if (fontSize) this.ctx.font = fontSize + "px monospace";
      else this.ctx.font = "16px monospace";
      this.ctx.fillText(text, x, y);
    }
  };

  // main.js
  var canvas;
  var rand = (max, min = 0) => Math.random() * (max - min) + min;
  var priorTimestamp = 0;
  var fps = (ms) => Math.floor(1e3 / ms);
  var points = [];

  var mouse = new Billiard(0, 0, 1);
  mouse.range = GRAV_RANGE;
  mouse.isMouse = true;

  function makePoints() {
    points = [mouse];
    for (let i = 0; i < BALL_COUNT; i++) {
      let point = new Billiard(rand(canvas.w - RADIUS, RADIUS), rand(canvas.h - RADIUS, RADIUS), RADIUS);
      point.vx = rand(SPEED_MAX, -SPEED_MAX);
      if (Math.abs(point.vx) < SPEED_MIN) point.vx = point.vx > 0 ? SPEED_MIN : -SPEED_MIN;
      point.vy = rand(SPEED_MAX, -SPEED_MAX);
      if (Math.abs(point.vy) < SPEED_MIN) point.vy = point.vy > 0 ? SPEED_MIN : -SPEED_MIN;
      point.grav_coeff = GRAV_COEFF;
      point.range = GRAV_RANGE;
      points.push(point);
    }
  }
  function makeQuadTree(points2) {
    let quadTree = new QuadTree(new Boundary(0, 0, canvas.w, canvas.h), THRESHOLD);
    for (let point of points2) quadTree.insert(point);
    return quadTree;
  }
  function frame(timestamp) {
    let dt = timestamp - priorTimestamp;
    if(DRAW_BG) canvas.clear();

    canvas.colour("#2a312d");
    canvas.rect(canvas.w - 30, 0, 30, 30);
    canvas.colour("white");
    canvas.text(fps(dt), canvas.w - 30, 20);
    canvas.colour("rgba(42, 49, 45,0.1");
    canvas.noStroke();
    canvas.rect(0, 0, canvas.w, canvas.h);
    let quadTree = makeQuadTree(points);
    movePoints(points, quadTree);
    if(DRAW_BALLS) drawPoints(points);
    if(DRAW_QUADTREE) drawQuadTree(quadTree);
    canvas.render();
    priorTimestamp = timestamp;
    window.requestAnimationFrame(frame);
  }
  function movePoints(points2, quadTree) {
    for (let point of points2) {
      if (point == mouse) continue;
      let neighbours = quadTree.getElements(point.areaOfEffect());
      let force = point.gravity(neighbours);
      point.move(force);
      if (BALLS_COLLIDE) {
        for (let neighbour of neighbours.filter((n) => n != point && n != mouse && n.collides(point))) {
          neighbour.collide(point);
        }
      }
      if (!WRAP) bounceOffScreen(canvas, point);
      else wrapAroundScreen(canvas, point);
      point.drag(DRAG_COEFF);
    }
  }
  function wrapAroundScreen(boundary, point) {
    if (point.x + point.r < boundary.x) {
      point.x = boundary.x + boundary.w + point.r;
    }
    if (point.x - point.r > boundary.x + boundary.w) {
      point.x = boundary.x - point.r;
    }
    if (point.y + point.r < boundary.y) {
      point.y = boundary.y + boundary.h + point.r;
    }
    if (point.y - point.r > boundary.y + boundary.h) {
      point.y = boundary.y - point.r;
    }
  }
  function bounceOffScreen(boundary, point) {
    if (point.x - point.r < boundary.x) {
      point.vx *= -1;
      point.x = boundary.x + point.r;
    }
    if (point.x + point.r > boundary.x + boundary.w) {
      point.vx *= -1;
      point.x = boundary.x + boundary.w - point.r;
    }
    if (point.y - point.r < boundary.y) {
      point.vy *= -1;
      point.y = boundary.y + point.r;
    }
    if (point.y + point.r > boundary.y + boundary.h) {
      point.vy *= -1;
      point.y = boundary.y + boundary.h - point.r;
    }
  }
  function drawPoints(points2) {
    for (let point of points2) {
      if (point != mouse) {
        let v = (50 + (point.vx * point.vx + point.vy * point.vy) * 20) % 365;
        canvas.noStroke();
        canvas.colour(`hsl(${v}, ${50}%, ${50}%)`);
        canvas.circle(point.x, point.y, point.r);
      }
    }
  }
  function drawQuadTree(tree) {
    canvas.stroke("white");
    canvas.noColour();
    if (tree.subtrees.length > 0) {
      for (let subtree of tree.subtrees) drawQuadTree(subtree);
    } else {
      canvas.rect(tree.boundary.x, tree.boundary.y, tree.boundary.w, tree.boundary.h);
    }
  }

  return {
      init(canvasId) {

        canvas = new Canvas(canvasId, 200, 200);
        canvas.resize();
        window.addEventListener("resize", () => canvas.resize());
        makePoints();
        document.addEventListener("mousemove", (e) => {
          mouse.x = e.pageX;
          mouse.y = e.pageY;
        });
        canvas.colour("rgba(0,0,0,1");
        canvas.noStroke();
        canvas.rect(0, 0, canvas.w, canvas.h);
        window.requestAnimationFrame(frame);
      }
  }
})();
