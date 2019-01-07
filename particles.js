class Particle {
    constructor(x, y, c) {
        this.xPos = x;
        this.yPos = y;
        this.xVel = 0;
        this.yVel = 0;
        this.mass = random(0.003, 0.03);
        this.colour = c;
    };

    // moves the particle
    move() {
        this.xPos += this.xVel;
        this.yPos += this.yVel;
    };

    // displays the particle
    display() {
        fill(this.colour)
        ellipse(this.xPos, this.yPos, this.mass*1000, this.mass*1000)
    };
};