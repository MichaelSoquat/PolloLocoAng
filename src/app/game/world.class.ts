import { Character } from "./character.class";

export class World {
    character = new Character;
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
        this.character.draw(this.ctx);
        requestAnimationFrame(() => {
            this.draw();
        })


    }
}