import './reset.css';
import './style.css';
import {Player} from './player';
import {display} from './display';

display.home.playButton.addEventListener('click', display.playerScreen.load);

const start = function() {
  display.game.load();
  const player1 = new Player();
  const computer1 = new Player();
  player1.gameboard.placeShip(1, 1, 'horizontal', 3);
  display.game.player1Layout.makeShip(1, 1, 'horizontal', 3);
  computer1.gameboard.placeShip(0, 0, 'vertical', 4);
  const cells = document.querySelectorAll('') //add a click event listener
}

display.playerScreen.onePlayerButton.addEventListener('click', start);
