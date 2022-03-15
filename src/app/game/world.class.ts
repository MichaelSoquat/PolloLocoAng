import { Character } from "./character.class";
import { Endboss } from "./endboss.class";
import { Level } from "./level.class";

export class World {

    level = new Level();
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
        this.checkCollision();
    }
    checkCollision() {
        setInterval(() => {
            this.level.chicken.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    if (this.character.isStamping(enemy)) {
                        console.log('working')
                    }
                };
            })

            // console.log(this.character.energy)
        })

    }
    setWorld() {
        this.character.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, 720, 480); //clear canvas
        this.ctx.translate(-this.character.x + 100, 0) //camera

        //add arrays to map

        this.addObjectToMap(this.level.background);
        this.addObjectToMap(this.level.chicken);
        this.addObjectToMap(this.level.cloud);
        //add to Map

        this.addToMap(this.character);
        this.addToMap(this.endboss);

        this.ctx.translate(this.character.x - 100, 0) //camera back


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