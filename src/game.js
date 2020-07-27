import GameObject from "./GameObject";
import img from "./images/game/c01.png";

export default class Game {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.fps = 1000 / 16;

    this.testGO = new GameObject(rootEl, img);
    this.testGO.position = { x: 100, y: 0 };
  }

  update() {
    this.testGO.update();
  }

  start() {
    setInterval(() => this.update(), this.fps);
  }
}
