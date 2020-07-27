import GameObject from "./gameObject";
import { add } from "./util";

export default class Projectile extends GameObject {
  update() {
    super.update();
    super.position = add(super.position, { x: 5, y: 0 });
  }
}
