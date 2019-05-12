class Wolf {
    constructor() {
        this.arrPos = [
            { x: 170, y: 245 },
            { x: 50, y: 320 },
            { x: 45, y: 420 },
            { x: 70, y: 540 },
            { x: 200, y: 510 },
            { x: 330, y: 540 },
            { x: 320, y: 406 },
            { x: 305, y: 287 },
            { x: 200, y: 510 }
        ]

        // this.getIndexPos();
        this.indexPos = Math.floor(Math.random() * this.arrPos.length);

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


    getIndexPos() {
        this.indexPos = Math.floor(Math.random() * this.arrPos.length);
    }

    run(paint) {
        //业务逻辑
        this.logic();
        //绘制
        this.onDraw(paint);
    }

    logic() {
        this.index++;
        if (this.index >= 6) {
            this.index = 0;

            //随机当前位置
            this.getIndexPos();
        }

    }

    onDraw(paint) {
        //绘制地图
        paint.drawImage(this.imgHs[this.index],
            this.arrPos[this.indexPos].x, this.arrPos[this.indexPos].y, this.imgW, this.imgH);
    }
    onmousedown(x, y) {
        if (x >= this.arrPos[this.indexPos].x &&
            x <= this.arrPos[this.indexPos].x + this.imgW &&
            y >= this.arrPos[this.indexPos].y &&
            y <= this.arrPos[this.indexPos].y + this.imgH) {
            console.log("Hit!")
        }
    }

}