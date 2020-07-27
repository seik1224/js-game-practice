import img from "./images/game/c01.png";
import Projectile from "./projectile";
import Character from "./character";

export default class Game {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.fps = 60;
    this.gameObjects = [];

    let a = new Projectile(rootEl, img);
    a.position = { x: 0, y: 100 };
    this.gameObjects.push(a);

    a = new Character(rootEl, img, { spd: 10 });
    a.position = { x: 0, y: 100 };
    this.gameObjects.push(a);
    a = new Character(rootEl, img, { spd: 1 });
    a.position = { x: 0, y: 200 };
    this.gameObjects.push(a);
  }

  update() {
    this.gameObjects.forEach((go) => go.update());
  }

  start() {
    setInterval(() => this.update(), 1000 / this.fps);
  }
}
