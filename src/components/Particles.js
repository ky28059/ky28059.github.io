import React from 'react';
import {createVector, random, color, PI, SCALE, background, createCanvas, fill, ellipse, noStroke, p5} from 'p5';


const Particles = (props) => {
    return <p>hi</p>
}

class Particle {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.mass = mass;

        // radius = (mass / π) ** 0.5
        this.radius = Math.sqrt(this.mass / PI) * SCALE;
        // set random color for particle
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }

    draw() {
        // Remove outline
        noStroke()
        // Set fill to particles color
        fill(this.color)
        // Draw particle
        ellipse(this.position.x, this.position.y, this.radius * 2)
    }

    applyForce(force) {
        // acceleration = force / mass
        this.acceleration.add(p5.Vector.div(force, this.mass))
    }

    physics(particle) {
        // Use particle
    }

    update() {
        // Update particle
    }
}

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(51, 51, 51)
}

export default Particles;