import { MovableObject } from "./MovableObject.class";

export class Character extends MovableObject {
    IMAGES_IDLE = [
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ]
    IMAGES_WALKING = [
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'

    ];

    IMAGES_DEAD = [
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];


    IMAGES_HURT = [
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        './assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];
    world;
    x = 0;
    y = 220;
    speed = 7;
    constructor() {
        super();
        this.loadImage('./assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);

        this.moveCharacter();
        this.applyGravity();
        this.animate();
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
            }

        }, 1000 / 60)


    }

    animate() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
                console.log(this.currentImage)

            }
            else if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
                this.playAnimation(this.IMAGES_WALKING)
            } else {

                this.playAnimation(this.IMAGES_IDLE)
            }
        }, 150)

    }
    jump() {
        if (this.y >= 220) {
            this.speedY = 30;
        }
    }

}