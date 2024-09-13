import { Vector2 } from "./Vector2";

export class Sprite {
    constructor({
        //resource - image we want to draw
        resource,

        //size of frame
        framesize,

        //Horiztonal Frames
        hframes,

        //Vertical Frames
        vframes,

        //which frame we want to show
        frame,

        //scale of images
        scale,

        //where to draw image
        position,

    }) {

        this.resource = resource;
        this.framesize = framesize ?? new Vector2(16,16);
        this.hframes = hframes ?? 1;
        this.vframes = vframes ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0,0);
        this.buildFrameMap();
    }

    buildFrameMap() {
        let frameCount = 0;
    
        for(let i = 0; i < this.vframes; i++) {
            for(let v = 0; v < this.hframes; v++) {
                this.frameMap.set(
                    frameCount,
                    new Vector2(this.framesize.x * i, this.framesize.y * v)
                )
                frameCount++;
            }
    
        }
    }

    drawImage(ctx, x,y) {
        if(!this.resource.isLoaded) {
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;
        const frame = this.frameMap.get(this.frame);
        if(frame) {
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        const framesizeX = this.framesize.x;
        const framesizeY = this.framesize.y;

        ctx.drawImage(
            this.resource.image,
            frameCoordX,
            frameCoordY,
            framesizeX,
            framesizeY,
            x,
            y,
            framesizeX * this.scale,
            framesizeY * this.scale,
        );

    }

} //end of sprite function

