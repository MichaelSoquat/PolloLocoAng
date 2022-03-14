import { DrawableObject } from "./DrawableObject.class";

export class MovableObject extends DrawableObject {
    moveLeft() {
        setInterval(() => {
            this.x -= 0.1;
        }, 1000 / 60)

    }
}