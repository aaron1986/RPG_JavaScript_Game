import './style.css'
import { resources } from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';
import { GameLoop } from './src/GameLoop.js';
import { Input, UP, DOWN, LEFT, RIGHT } from './src/Input.js';

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

const heroPos = new Vector2(26 * 5, -3 * 5);

const input = new Input();

const update = () => {
  if (input.direction === DOWN) {
    heroPos.y += 1;
    hero.frame = 0;  // Frame for moving down
  }
  if (input.direction === UP) {
    heroPos.y -= 1;
    hero.frame = 2;  // Frame for moving up
  }
  if (input.direction === LEFT) {
    heroPos.x -= 1;
    hero.frame = 3;  // Frame for moving left
  }
  if (input.direction === RIGHT) {
    heroPos.x += 1;
    hero.frame = 1;  // Frame for moving right
  }
};


const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);

  //Hero Information
  const heroOffset = new Vector2(+8, +60);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + 1 + heroOffset.y;

  hero.drawImage(ctx, heroPosX, heroPosY);
} //end of const draw function

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
