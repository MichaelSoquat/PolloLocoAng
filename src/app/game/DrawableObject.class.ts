export class DrawableObject {

    x = 0;
    y = 0;
    width = 100;
    height = 200;
    imageCache = {};

    img;
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
            console.log(this.imageCache)
        });

    }
}
