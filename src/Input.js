export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
    constructor() {
        this.heldDirections = [];
        document.addEventListener("keydown", (event) => {
            if(event.code === "ArrowUp") {
                this.OnArrowPressed(UP);
            }
            if(event.code === "ArrowDown") {
                this.OnArrowPressed(DOWN);
            }
            if(event.code === "ArrowLeft") {
                this.OnArrowPressed(LEFT);
            }
            if(event.code === "ArrowRight") {
                this.OnArrowPressed(RIGHT);
            }
        })

        document.addEventListener("keyup", (event) => {
            if(event.code === "ArrowUp") {
                this.OnArrowReleased(UP);
            }
            if(event.code === "ArrowDown") {
                this.OnArrowReleased(DOWN);
            }
            if(event.code === "ArrowLeft") {
                this.OnArrowReleased(LEFT);
            }
            if(event.code === "ArrowRight") {
                this.OnArrowReleased(RIGHT);
            }
        })
    }

    get direction() {
        return this.heldDirections[0];
    }

    OnArrowPressed(direction) {
        if(this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    OnArrowReleased(direction) {
        const index = this.heldDirections.indexOf(direction);
        if(index === -1) {
            return;
        }
        this.heldDirections.splice(index, 1);
    }

}