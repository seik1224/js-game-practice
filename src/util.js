export function mul(v, s) {
  return {
    x: v.x * s,
    y: v.y * s,
  };
}

export function dot(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

export function mule(v1, v2) {
  return {
    x: v1.x * v2.x,
    y: v1.y * v2.y,
  };
}

export function unit(v) {
  const d = Math.sqrt(v.x ** 2 + v.y ** 2);
  return {
    x: v.x / d,
    y: v.y / d,
  };
}

export function add(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y,
  };
}
