class Resources {
    constructor() {
        this.toLoad = {
            sky: "/sprites/sky.png",
            ground: "/sprites/ground.png",
            hero: "/sprites/hero.png"
        };

        this.images = {};

        //load each image increment throught each image
/*         Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
        }); */

        for(let i = 0; i < Object.keys(this.toLoad).length; i++) {
            const key = Object.keys(this.toLoad)[i];
            const img = new Image();

            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        }
    }
}

export const resources = new Resources();