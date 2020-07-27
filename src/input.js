const keyState = {
  a: false,
  d: false,
  w: false,
  s: false,
  space: false,
};

const handler = ({ key, type, keyCode }) => {
  let pressed = false;
  if (type === "keydown") {
    pressed = true;
  }
  if (key === "a") {
    keyState.a = pressed;
  }
  if (key === "d") {
    keyState.d = pressed;
  }
  if (key === "w") {
    keyState.w = pressed;
  }
  if (key === "s") {
    keyState.s = pressed;
  }
  if (keyCode === 32) {
    keyState.space = pressed;
  }
};

document.addEventListener("keydown", handler);
document.addEventListener("keyup", handler);

// a를 누르면 { x: -1, y: 0 }리턴하는 함수
// a, w 누르면 { x: -1, y: -1 }
export function getMovement() {
  let x = (keyState.a && -1) + (keyState.d && 1);
  let y = (keyState.w && -1) + (keyState.s && 1);
  const distance = Math.sqrt(x ** 2 + y ** 2);
  x /= distance;
  y /= distance;
  return { x, y };
}

export function isFired(keyCode) {
  return keyState.space;
}
