import { MovableObject } from "./MovableObject.class";

export class ThrowableObject extends MovableObject {
    height = 60;
    width = 60;
    constructor(x, y) {
        super();
        this.loadImage('./assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
    }
}