
import { MovableObject } from "./MovableObject.class";


export class Cloud extends MovableObject {
    width = 300;
    height = 200;
    y = 20;
    x;
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x + Math.random() * 500;
        this.moveLeft();
    }
    moveLeft() {
        setInterval(() => {
            this.x -= 0.1;
        }, 1000 / 60)

    }
}