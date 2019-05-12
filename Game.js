class Game {
    constructor(id) {
        //获得画布
        let canvas = document.getElementById(id);

        //设置鼠标点击事件
        canvas.onmousedown = this.onmousedown.bind(this);
        //获得画笔
        this.paint = canvas.getContext('2d');

        //创建游戏运行页面
        this.gameView = new GameView();
    }

    run() {
        // console.log("游戏运行");
        this.gameView.run(this.paint);
    }

    start() {
        //启动线程    每200毫秒调用当前的run方法
        setInterval(this.run.bind(this), 200);
    }

    onmousedown(ev) {
        // console.log(ev);
        let x = ev.clientX;
        let y = ev.clientY;


        this.gameView.onmousedown(x, y)

    }
}