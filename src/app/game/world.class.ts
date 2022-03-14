import { Background } from "./background.class";
import { Character } from "./character.class";
import { Endboss } from "./endboss.class";

export class World {
    background = [new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720)];

    endboss = new Endboss();
    character = new Character();
    image = new Image();
    keyboard;
    ctx;
    canvas;
    constructor(ctx, canvas, keyboard) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, 720, 480); //clear canvas
        this.ctx.translate(-this.character.x, 0)
        //addToMap
        this.addObjectToMap(this.background);
        this.addToMap(this.character);
        this.addToMap(this.endboss);

        this.ctx.translate(this.character.x, 0)


        //redrawing fps
        requestAnimationFrame(() => {
            this.draw();
        })


    }

    addToMap(mo) {
        mo.draw(this.ctx)
    }

    addObjectToMap(arr) {
        arr.forEach((obj) => {
            obj.draw(this.ctx)
        })
    }
}