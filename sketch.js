// setup() is called once at page-load
function setup() {
    createCanvas(1440,900); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    // positions of sec/min/hr points
    var dot1 = {
        x: 97,
        y: 250
      };
    var dot2 = {
        x: 100,
        y: 350
    };
    var dot3 = {
        x: 102,
        y: 450
    };

    background(0);

    // populating screen with additional points per sec/min/hr increase
    fill(color('#9EC2FF'));
    for (let i = 0; i < sec; i++) {
        circle(dot1.x, dot1.y, 10*1.2);
        dot1.x += 15*1.2
    }

    fill(color('#4259C3'));
    for (let i = 0; i < min; i++) {
        circle(dot2.x, dot2.y, 15*1.5);
        dot2.x += 20*1.5
    }

    fill(color('#212AA5'));
    for (let i = 0; i < hr; i++) {
        circle(dot3.x, dot3.y, 25*1.4);
        dot3.x += 30*1.4
    }

}