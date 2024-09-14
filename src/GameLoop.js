export class GameLoop {
    constructor(update, render) {
        this.lastFrameTime = 0;
        this.accumlatedTime = 0;
        this.timeStep = 1000 / 60;

        this.update = update;
        this.render = render;

        //Request Animation Frame Id
        this.rafId = null;
        this.isRunning = false;
    }

    //MainLoop function
    mainLoop = (timeStep) => {
        if(!this.isRunning) {
            return;
        }

        let deltaTime = timeStep - this.lastFrameTime;
        this.lastFrameTime = timeStep;

        this.accumlatedTime += deltaTime;

        while(this.accumlatedTime >= this.timeStep) {
            this.update(this.timeStep);
            this.accumlatedTime -= this.timeStep;
        }

        this.render();
        this.rafId = requestAnimationFrame(this.mainLoop);
    }

    start() {
        if(!this.isRunning) {
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if(this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
    }
}