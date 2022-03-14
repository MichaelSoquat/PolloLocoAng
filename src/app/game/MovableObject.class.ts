import { DrawableObject } from "./DrawableObject.class";

export class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    moveRight() {
        this.x -= 5
    }

    moveLeft() {
        this.x += 5;
    }

    applyGravity() {
        setInterval(() => {
            if (this.y<=250 || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)


    }
}