import { BOTTLESBAR } from "./bottlesBar.class";
import { Character } from "./character.class";
import { COINBAR } from "./coinBar.class";
import { Endboss } from "./endboss.class";
import { Level } from "./level.class";
import { LIFEBAR } from "./lifeBar.class";
import { ThrowableObject } from "./throwableObject.class";


export class World {
    ctx;
    level = new Level();
    lifebar = new LIFEBAR();
    coinbar = new COINBAR();
    bottlesbar = new BOTTLESBAR();
    endboss = new Endboss();
    character = new Character();
    image = new Image();
    keyboard;
    throwableObject = [];
    canvas;
    lastThrow = 1;
    timegone = 0;
    currentBottle;

    constructor(ctx, canvas, keyboard) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkCollect();
        this.checkThrow();
    }

    checkThrow() {
        setInterval(() => {
            let newThrow = new Date().getTime();
            this.timegone = newThrow - this.lastThrow;
            if (this.keyboard.THROW && this.timegone >= 1000) {
                this.lastThrow = new Date().getTime();
                let bottle = new ThrowableObject(this.character.x + 40, this.character.y + 100)
                this.currentBottle = bottle;
                console.log(this.currentBottle)

                this.throwableObject.push(bottle);
            }
        }, 1000 / 60)
    }

    // collect items

    checkCollect() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                    this.coinbar.percentage += 10;
                    this.coinbar.checkCurrentImage();
                }

            });
            this.level.bottles.forEach((bottle) => {
                if (this.character.isColliding(bottle)) {
                    this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1)
                    this.bottlesbar.percentage += 10;
                    this.bottlesbar.checkCurrentImage();
                }

            })

        }, 1000 / 60)
    }

    // check collision

    checkCollision() {
        setInterval(() => {
            this.level.chicken.forEach((enemy) => {
                if (this.character.isStamping(enemy) || (this.currentBottle && this.currentBottle.isColliding(enemy))) {
                    enemy.energy = 0;
                    enemy.isDead = true;

                    setTimeout(() => {
                        enemy.y = 600;   //hide enemy
                    }, 1000)

                }
                else if (this.character.isColliding(enemy) && !enemy.isDead) {
                    this.character.hit();
                    this.lifebar.percentage = this.character.energy;
                    this.lifebar.checkCurrentImage();

                };
            }, 1000 / 60)


        })

    }

    setWorld() {
        this.character.world = this;
        this.coinbar.world = this;
        this.bottlesbar.world = this;
        this.lifebar.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, 720, 480); //clear canvas
        this.ctx.translate(-this.character.x + 100, 0) //camera
        //add arrays to map
        this.addObjectToMap(this.level.background);
        this.addObjectToMap(this.level.chicken);
        this.addObjectToMap(this.level.cloud);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.throwableObject);
        //add to Map
        this.ctx.translate(this.character.x - 100, 0)
        //space for fixed content like status bars
        this.addToMap(this.lifebar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlesbar);
        //end of space for fixed content
        this.ctx.translate(-this.character.x + 100, 0)
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