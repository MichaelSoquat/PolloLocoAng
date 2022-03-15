import { DrawableObject } from "./DrawableObject.class";

export class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    currentImage = 0;

    moveRight(speed) {
        this.x += speed;
    }

    moveLeft(speed) {
        this.x -= speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.y <= 220 || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)


    }

    isStamping(mo) {
        return this.x + this.width > mo.x &&
            this.x < mo.x &&
            this.y + this.height >= mo.y
            // && this.isFalling;

    }
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }
    isAboveGround() {
        return this.y < 220;
    }
}
