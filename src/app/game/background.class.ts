import { DrawableObject } from "./DrawableObject.class";

export class Background extends DrawableObject {
    width = 720;
    height = 480;
    y = 0;
    x;
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;


    }
}