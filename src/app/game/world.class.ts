import { Background } from "./background.class";
import { Character } from "./character.class";
import { Cloud } from "./cloud.class";
import { Endboss } from "./endboss.class";

export class World {
    background = [new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', - 719),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', -719),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4)];

    cloud = [new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 0),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 2),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720 * 3),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 4),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720 * 5),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 6)
    ];


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

        //add arrays to map
        this.addObjectToMap(this.background);
        this.addObjectToMap(this.cloud);
        //add to Map

        this.addToMap(this.character);
        this.addToMap(this.endboss);

        this.ctx.translate(this.character.x, 0)


        //redrawing fps
        requestAnimationFrame(() => {
            this.draw();
        })


    }
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };


    addObjectToMap(arr) {
        arr.forEach((obj) => {
            obj.draw(this.ctx)
        })
    }
}