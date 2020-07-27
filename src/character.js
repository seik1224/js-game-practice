import GameObject from "./gameObject";
import { getMovement, isFired } from "./input";
import { unit, mul, add } from "./util";

export default class Character extends GameObject {
  constructor(rootEl, imageSrc, stat) {
    super(rootEl, imageSrc);
    this.stat = stat;
  }

  update() {
    super.update();
    let movement = unit(getMovement());
    movement = mul(movement, this.stat.spd);
    super.position = add(super.position, movement);
  }
}
