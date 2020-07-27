import "./css/style.css";
import "./input";
import Game from "./game";

const game = new Game(document.querySelector("#game-canvas"));
game.start();
