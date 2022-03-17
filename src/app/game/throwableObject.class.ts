import { MovableObject } from "./MovableObject.class";

export class ThrowableObject extends MovableObject {
    height = 60;
    width = 60;
    x;
    y;
    constructor(x, y) {
        super();
        this.loadImage('./assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.moveBottle();
    }
    moveBottle() {
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravityForBottle();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 60)


    }
    applyGravityForBottle() {
        setInterval(() => {
            if (this.y < 500 || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)


    }
}

