import './style.css'
import { resources } from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';

const canvas = document.querySelector('#game-canvas');
//ctx is shorthand for context
const ctx = canvas.getContext("2d");


const skySprite = new Sprite({
  resource: resources.images.sky,
  framesize: new Vector2(320, 180)
});

const groundSprite = new Sprite({
  resource: resources.images.ground,
  framesize: new Vector2(320, 180)
});

const hero = new Sprite({
  resource: resources.images.hero,
  framesize: new Vector2(32, 32),
  hframes:3, 
  vframes:8,
  frame:1
});

const heroPos = new Vector2(16 * 5, 16 * 5);

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);

  //Hero Information
  const heroOffset = new Vector2(+8, +60);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y = 1 + heroOffset.y;

  hero.drawImage(ctx, heroPosX, heroPosY);
} //end of const draw function




setInterval(() => {
  draw()
}, 300)
