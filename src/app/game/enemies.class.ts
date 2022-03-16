import { MovableObject } from "./MovableObject.class";

export class Chicken extends MovableObject {
    IMAGES_WALKING = [
        './assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        './assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        './assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_DEAD = ['./assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png']
    width = 100;
    height = 80;
    x = 200;
    y = 340;
    isDead = false;
    speed = 0.1 + Math.random() * 0.15;
    constructor() {
        super();
        this.loadImage('./assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = this.x + Math.random() * 4000;
        this.intervalForMoving();
        this.animate();


    }
    intervalForMoving() {
        setInterval(() => {
            if (!this.isDead) {
                this.moveLeft(this.speed);
            }

        })
    }
    animate() {
        setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD)
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 150);
    }
}