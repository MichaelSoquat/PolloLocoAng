
import { MovableObject } from "./MovableObject.class";

export class Coins extends MovableObject {
    world;
    y = 40;
    height = 120;
    width = 120;
    x = 300;

    images_ANIMATION = ['./assets/img/8.Coin/Moneda1.png',
        './assets/img/8.Coin/Moneda2.png'
    ]

    constructor() {
        super()
        this.loadImage('./assets/img/8.Coin/Moneda1.png');
        this.x = this.x + Math.random() * 3000;
        this.y = this.y + Math.random() * 200;
        this.loadImages(this.images_ANIMATION);
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_ANIMATION);

        }, 500)
    }

}