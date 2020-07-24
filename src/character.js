/* oop: 
프로그램을 절차지향이 아닌 객체들과의 관계로써 프로그래밍 하는 컨셉
여기서 객체란,
오브젝트에 그 오브젝트안에 데이터, 기능 들을 정리해놓은 것
*/

export default class Character {
  constructor(parent, imgSrc, stat) {
    this.img = document.createElement("img");
    this.img.src = imgSrc;
    parent.appendChild(this.img);

    this.img.style.position = "absolute";
    this.setPosition({ x: 0, y: 0 });
    this.stat = stat;
    console.log("a character bas been created.");
    this.radius = 30;
  }

  move({ x, y }) {
    const length = Math.sqrt(x ** 2 + y ** 2);
    if (length > 0) {
      x /= length;
      y /= length;
    }

    const p = this.getPosition();
    p.x += x * this.stat.spd;
    p.y += y * this.stat.spd;
    this.setPosition(p);
  }

  setPosition({ x, y }) {
    this.img.style.left = x + "px";
    this.img.style.top = y + "px";
  }

  getPosition() {
    return {
      x: this.img.offsetLeft,
      y: this.img.offsetTop,
    };
  }

  destroySelf() {
    this.img.remove();
  }
}
