import "./css/style.css";
import imgPlayer1 from "./images/game/c01.png";
import imgEnemy1 from "./images/game/enemy/e1.png";
import imgEnemy2 from "./images/game/enemy/e2.png";
import imgEnemy3 from "./images/game/enemy/e3.png";
import imgEnemy4 from "./images/game/enemy/e4.png";
import Character from "./character";
import { getMovement } from "./input";
import { checkCollision } from "./physics";

const gameCanvas = document.querySelector("#game-canvas");

const canvasWidth = gameCanvas.offsetWidth;
// const canvasHeight = gameCanvas.offsetHeight + "px";

const playerCharacter = new Character(gameCanvas, imgPlayer1, {
  hp: 100,
  spd: 10,
  def: 1,
  att: 5,
});

const imgenemy = [imgEnemy1, imgEnemy2, imgEnemy3, imgEnemy4];
const enemyCharacters = [];

setInterval(() => {
  const y = Math.ceil(Math.random() * 100) * 4.3;

  const enemy = new Character(
    gameCanvas,
    imgenemy[Math.floor(Math.random() * imgenemy.length)],
    {
      hp: 15,
      spd: 3,
      def: 0,
      att: 1,
    }
  );
  enemy.setPosition({ x: canvasWidth, y: y });
  enemyCharacters.push(enemy);
}, 100);

const x = Math.ceil(Math.random() * 10);

// update loop
setInterval(() => {
  // player character
  const movement = getMovement();
  playerCharacter.move(movement);

  // enemy character
  enemyCharacters.some((character, idx) => {
    if (character.getPosition().x > 0) {
      character.move({ x: -x, y: 0 });
    } else {
      const e = enemyCharacters.splice(idx, 1);
      e[0].destroySelf();
      // 버그 방지용
      // 배열 순회중 배열을 변경 하면, 밑의 코드에서 undefined 에러가 발생할 수 있음.
      return true;
    }
    return false;
  });

  const gameArrow = document.querySelector(".game-btn-arrow");

  if (getMovement().x > 0) {
    gameArrow.style.left = "423px";
  } else if (getMovement().x < 0) {
    gameArrow.style.left = "413px";
  } else {
    gameArrow.style.left = "418px";
  }

  if (getMovement().y > 0) {
    console.log(getMovement().y);
    gameArrow.style.top = "711px";
  } else if (getMovement().y < 0) {
    gameArrow.style.top = "701px";
  } else {
    gameArrow.style.top = "706px";
  }
  enemyCharacters.forEach((enemy, idx) => {
    if (checkCollision(playerCharacter, enemy)) {
      const e = enemyCharacters.splice(idx, 1);
      e[0].destroySelf();
    }
  });
  // const collided = enemyCharacters.some((enemy) =>
  //   checkCollision(playerCharacter, enemy)
  // );
}, 16);
