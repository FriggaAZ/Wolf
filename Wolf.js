class Wolf {
    constructor() {
        let imgDataH = [
            './img/wolf/h0.png',
            './img/wolf/h1.png',
            './img/wolf/h2.png',
            './img/wolf/h3.png',
            './img/wolf/h4.png',
            './img/wolf/h5.png',
            './img/wolf/h6.png',
            './img/wolf/h7.png',
            './img/wolf/h8.png',
        ];
        this.imgHs = [];
        for (let i = 0; i < imgDataH.length; i++) {
            this.imgHs[i] = new Image();
            this.imgHs[i].src = imgDataH[i];
        }

        this.imgX = 0;
        this.imgY = 0;
        this.imgW = 108;
        this.imgH = 101;
        this.index = 0;
    }



    run(paint) {
        //业务逻辑
        this.logic();
        //绘制
        this.onDraw(paint);
    }

    logic() {
        this.index++;
        if (this.index >= 9)
            this.index = 0;
    }

    onDraw(paint) {
        //绘制地图
        paint.drawImage(this.imgHs[this.index], this.imgX, this.imgY, this.imgW, this.imgH);
    }
}