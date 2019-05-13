class TimeView {
    constructor(width, height) {

        //获得当前时间的图片
        //创建时间对象
        this.img = new Image();
        //设置图片资源
        this.img.src = '../img/progress.png';
        //设置图片的尺寸
        this.imgY = 110;
        this.imgW = width / 30 * 17;
        this.imgH = this.imgW / 9;
        this.imgX = 90;

        //每200毫秒增加的下标
        this.index = 0;

    }

    run(paint) {
        //业务逻辑处理
        this.logic();
        //图片绘制
        this.onDraw(paint);
    }

    logic() {

        if (this.index % 5 == 0) {
            //每一秒减少时间的宽度
            if (this.imgW > 0) {
                this.imgW = this.imgW - 17;
            }
        }

    }

    onDraw(paint) {
        paint.drawImage(this.img, this.imgX, this.imgY, this.imgW, this.imgH);
    }
}