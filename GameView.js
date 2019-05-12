class GameView {
    constructor() {

        //创建游戏的地图
        this.map = new Image();
        //设置图片资源
        this.map.src = "./img/game_bg.jpg";

        //创建狼
        this.wolf = new Wolf();

    }

    run(paint) {
        //业务逻辑
        this.logic();
        //绘制
        this.onDraw(paint);
    }

    logic() {

    }

    onDraw(paint) {
        //绘制地图
        paint.drawImage(this.map, 0, 0, 480, 800);
        this.wolf.run(paint);
    }

    onmousedown(x, y) {
        this.wolf.onmousedown(x, y);
    }
}