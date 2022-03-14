import { MovableObject } from "./MovableObject.class";

export class Character extends MovableObject {
    world;
    x = 50;
    y = 250;
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
                this.moveRight();
            }
            if (this.world.keyboard.RIGHT) {
                this.otherDirection = false;
                this.moveLeft();
            }

            if (this.world.keyboard.JUMP) {
                this.jump();
                console.log(this.y)
            }

        }, 1000 / 60)


    }

    jump() {
        if (this.y>=250) {
            this.speedY = 30;
        }
    }
}