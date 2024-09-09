export default function(s) {
    let reset = 300;
    let timer = 1;

    let dims = 400;
    let size = 50;
    let v = 0.0033;

    let a = makeAgent(0.5, 0.1, "Mr A", "#F00");
    let b = makeAgent(0.1, 0.66, "Mr B", "#FF0");
    let c = makeAgent(0.9, 0.66, "Mr C", "#F0F");

    function drawAgent(agent) {
        s.fill(agent.col);
        s.circle(agent.x * dims, agent.y * dims, size);
        s.textAlign(s.CENTER, s.CENTER);
        s.fill("black")
        s.text(agent.name, agent.x * dims, agent.y * dims + 2);
    }

    function makeAgent(x, y, name, col) {
        return {
            x: x,
            startX: x,
            y: y,
            startY: y,
            name: name,
            col: col
        }
    }

    s.setup = () => {
        s.createCanvas(dims, dims);
    }

    s.draw = () => {
        //s.clear();

        s.stroke('#fff');
        s.rect(0,0,s.width-2, s.height-2);
        s.stroke('#0000');

        //move to target
        moveAgentToAgent(a, b);
        moveAgentToAgent(b, c);
        moveAgentToAgent(c, a);

        drawAgent(a);
        drawAgent(b);
        drawAgent(c);

        if (timer++ % reset == 0) {
            timer = 1;
            resetAgent(a);
            resetAgent(b);
            resetAgent(c);
            s.clear();
        }
    }

    function resetAgent(a) {
        a.x = a.startX;
        a.y = a.startY;
    }

    function moveAgentToAgent(a, b) {
        let target = s.createVector(b.x, b.y);
        let current = s.createVector(a.x, a.y);

        //get unit vector in direction of target and scale by v
        let dir = target.sub(current);
        let dist = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
        if (dist < size / dims) return;
        let change = dir.normalize().mult(v);

        a.x += change.x;
        a.y += change.y;
    }
}