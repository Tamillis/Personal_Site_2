export default function (s) {
    let reset = 300;
    let timer = 1;

    let dims = 400;
    let v = 0;
    let vMax = 0.005;

    let agents = [makeAgent(0.5, 0.1, "Mr A", "Mr B", "#0AC"), makeAgent(0.1, 0.8, "Mr B", "Mr C", "#AC0"), makeAgent(0.9, 0.8, "Mr C", "Mr A", "#C0A")];

    function drawAgent(agent) {
    }

    function makeAgent(x, y, name, target, col) {
        return {
            x: x,
            startX: x,
            y: y,
            startY: y,
            r: 0.075,
            name: name,
            target: target,
            col: col,
            move() {
                let b = agents.filter(agent => agent.name == this.target)[0];

                //get unit vector in direction of target and scale by v
                let dir = s.createVector(b.x, b.y).sub(this.x, this.y);

                if (dir.mag() > this.r * 2) {
                    let change = dir.normalize().mult(v);
                    this.x += change.x;
                    this.y += change.y;
                }
            },
            offset(other) {
                //offset to be size
                let targetPos = s.createVector(other.x, other.y);
                let dir = s.createVector(this.x, this.y).sub(targetPos);
                let distanceOverlapping = this.r - dir.mag()
                let offset = dir.normalize().mult(distanceOverlapping);
                let newPos = s.createVector(this.x, this.y).add(offset);
                this.x = newPos.x;
                this.y = newPos.y;
            },
            draw() {
                s.fill("white")
                s.circle(this.x * dims, this.y * dims, this.r * 2 * dims)
                s.fill(this.col);
                s.circle(this.x * dims, this.y * dims, this.r * 2 * dims - 4);
                s.textAlign(s.CENTER, s.CENTER);
                s.fill("black")
                s.text(this.name, this.x * dims, this.y * dims);
            }
        }
    }

    s.setup = () => {
        s.createCanvas(dims, dims);
    }

    s.draw = () => {
        //s.clear();

        s.stroke('#fff');
        s.rect(0, 0, s.width - 2, s.height - 2);
        s.stroke('#0000');

        //move to target
        for (let a of agents) a.move()
        for (let a of agents) a.draw()

        if (timer++ % reset == 0) {
            timer = 1;
            v = 0;
            resetAgents()
            s.clear();
        }
        else {
            v += 0.00005;
            if(v > vMax) v = vMax;
        }
    }

    function resetAgents() {
        for (let a of agents) {
            a.x = a.startX;
            a.y = a.startY;
        }
    }
}