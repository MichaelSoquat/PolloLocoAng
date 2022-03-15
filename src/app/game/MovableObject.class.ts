import { DrawableObject } from "./DrawableObject.class";

export class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    newHit = 0;
    currentImage = 0;
    isHurt = false;
    isDead = false;

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
        this.newHit = new Date().getTime();
        if ((this.newHit - this.lastHit) > 1000) {
            this.energy -= 20;
            this.isDamaged();
        }

        if (this.energy <= 0) {
            this.energy = 0;
            this.isDead = true;
        } else {
            this.lastHit = new Date().getTime();
            console.log(this.lastHit)
        }
    }

    isDamaged() {
        this.isHurt = true;
        setTimeout(() => {
            this.isHurt = false;
        }, 1000)
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
