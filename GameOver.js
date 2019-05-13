class GameOver {
    constructor(width, height) {
        this.img = new Image();

        this.img.src = './img/startBg.jpg';

        this.imgY = 0;
        this.imgW = width;
        this.imgX = 0;
        this.imgH = height;
    }

    run() {
        this.logic();
        this.onDraw(paint);
    }

    logic() {

    }

    onDraw(paint) {
        paint.drawImage(this.img, this.imgX, this.imgY, this.imgW, this.imgH);
    }
}