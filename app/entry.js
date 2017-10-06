import "../styles.css";

import { Game } from "./game.js";

let game = new Game(document, window, "onclick", "getElementById", "className", "innerHTML", "confirm");

game.init("newgame", "won", "color", "restart", "p1", "p2");
game.start();