export default class GameObject {
  constructor(rootEl, imageSrc) {
    this.rootEl = rootEl;

    this.el = document.createElement("img");
    this.el.style.position = "absolute";
    this.rootEl.append(this.el);

    if (imageSrc !== undefined) {
      this.setImageSrc(imageSrc);
    }
  }

  update() {}

  set position({ x, y }) {
    this.el.style.left = x + "px";
    this.el.style.top = y + "px";
  }

  get position() {
    return {
      x: this.el.offsetLeft,
      y: this.el.offsetTop,
    };
  }

  setImageSrc(src) {
    this.el.src = src;
  }
}
