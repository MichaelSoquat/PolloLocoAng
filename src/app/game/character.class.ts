import { MovableObject } from "./MovableObject.class";

export class Character extends MovableObject {
    world;
    x = 50;
    y = 250;
    constructor() {
        super();
        this.loadImage('./assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.moveCharacter();
    }

    moveCharacter() {
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= 5;
            }
            if (this.world.keyboard.RIGHT) {
                this.x += 5;
            }

        }, 1000 / 60)



    }
}