
import { MovableObject } from "./MovableObject.class";

export class Bottles extends MovableObject {
    height = 60;
    width = 60;
    constructor(path, x) {
        super()
        this.loadImage(path);
        this.x = x;
        this.y = 360;

    }

}