// obj1, obj2 객체는
// radius값과 x, y를 내뱉는 getPosition함수가 있어야함.
export function checkCollision(obj1, obj2) {
  const p1 = obj1.getPosition();
  const p2 = obj2.getPosition();
  const distance = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  return obj1.radius + obj2.radius >= distance;
}
