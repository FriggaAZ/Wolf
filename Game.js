class Game {
    constructor(id, width, height) {

        this.width = width;
        this.height = height;

        //获得画布
        let canvas = document.getElementById(id);

        //设置鼠标点击事件
        canvas.onmousedown = this.onmousedown.bind(this);
        canvas.width = this.width;
        canvas.height = this.height;
        //获得画笔
        this.paint = canvas.getContext('2d');

        this.STATE_GAME_OVER = 0;
        this.STATE_GAME_RUN = this.STATE_GAME_OVER + 1;

        this.state = this.STATE_GAME_RUN;

        //创建游戏运行页面
        // this.gameView = new GameView();
        this.initView();

    }

    initView() {
        switch (this.state) {
            case this.STATE_GAME_OVER:
                this.view = new GameOver(this.width, this.height);
                break;
            case this.STATE_GAME_RUN:
                this.view = new GameView(this.width, this.height);
                break;
        }
    }

    run() {
        // console.log("游戏运行");
        this.view.run(this.paint);
    }

    start() {
        //启动线程    每200毫秒调用当前的run方法
        setInterval(this.run.bind(this), 200);
    }

    onmousedown(ev) {
        // console.log(ev);
        let x = ev.clientX;
        let y = ev.clientY + document.documentElement.scrollTop;


        this.view.onmousedown(x, y)

    }
}