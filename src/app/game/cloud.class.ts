
import { MovableObject } from "./MovableObject.class";


export class Cloud extends MovableObject {
    width = 250;
    height = 150;
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
            this.x -= 0.05;
        }, 1000 / 60)

    }
}