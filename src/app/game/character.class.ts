import { MovableObject } from "./MovableObject.class";

export class Character extends MovableObject {
    world;
    x = 0;
    y = 220;
    speed = 7;
    constructor() {
        super();
        this.loadImage('./assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.moveCharacter();
        this.applyGravity();

    }

    moveCharacter() {
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.otherDirection = true;
                this.moveLeft(this.speed);
            }
            if (this.world.keyboard.RIGHT) {
                this.otherDirection = false;
                this.moveRight(this.speed);
            }

            if (this.world.keyboard.JUMP) {
                this.jump();
                console.log(this.y)
            }

        }, 1000 / 60)


    }

    jump() {
        if (this.y >= 220) {
            this.speedY = 30;
        }
    }
}