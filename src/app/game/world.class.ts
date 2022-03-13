import { Character } from "./character.class";
import { Endboss } from "./endboss.class";

export class World {
    endboss = new Endboss();
    character = new Character();
    image = new Image();
    ctx;
    canvas;
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.draw();
    }

    draw() {
        this.addToMap(this.endboss)
        this.addToMap(this.character);
        requestAnimationFrame(() => {
            this.draw();
        })


    }

    addToMap(mo) {
        mo.draw(this.ctx)
    }
}