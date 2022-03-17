import { DrawableObject } from "./DrawableObject.class";

export class BOTTLESBAR extends DrawableObject {
    world;
    percentage = 0;
    currentImage;
    index = 0;

    IMAGES = [
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/0.png',
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/20.png',
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/40.png',
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/60.png',
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/80.png',
        './assets/img/7.Marcadores/Barra/Marcador_botella/Azul/100.png'
    ];
    constructor() {
        super();
        this.loadImage('./assets/img/7.Marcadores/Barra/Marcador_botella/Azul/0.png');
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.checkCurrentImage();
    }

    checkCurrentImage() {

        if (this.percentage == 100) {
            this.index = 5;
        }
        else if (this.percentage >= 80) {
            this.index = 4;
        }
        else if (this.percentage >= 60) {
            this.index = 3;
        }
        else if (this.percentage >= 40) {
            this.index = 2;
        }
        else if (this.percentage >= 20) {
            this.index = 1;
        }

        this.currentImage = this.IMAGES[this.index];
        this.loadImage(this.currentImage)
    }
}