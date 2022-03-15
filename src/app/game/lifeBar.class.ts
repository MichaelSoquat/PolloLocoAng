import { DrawableObject } from "./DrawableObject.class";

export class LIFEBAR extends DrawableObject {
    world;
    percentage = 100;
    currentImage;
    index = 5;
    IMAGES = [
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        './assets/img/7.Marcadores/Barra/Marcador vida/azul/100_.png'

    ];
    constructor() {
        super();
        this.loadImage('./assets/img/7.Marcadores/Barra/Marcador vida/azul/100_.png');
        this.x = 40;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.checkCurrentImage();
    }

    checkCurrentImage() {
        if (this.percentage == 0) {
            this.index = 0;
        }
        else if (this.percentage <= 20) {
            this.index = 1;
        }
        else if (this.percentage <= 40) {
            this.index = 2;
        }
        else if (this.percentage <= 60) {
            this.index = 3;
        }
        else if (this.percentage <= 80) {
            this.index = 4;
        }





        console.log(this.percentage)
        this.currentImage = this.IMAGES[this.index];
        this.loadImage(this.currentImage)
    }
}