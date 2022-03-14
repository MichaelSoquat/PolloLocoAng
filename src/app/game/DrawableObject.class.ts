export class DrawableObject {

    x = 0;
    y = 0;
    width = 100;
    height = 200;

    img;
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(array) {
        this.img = new Image();
        array.forEach(path => {
            path = this.img.src;
        });

    }
}