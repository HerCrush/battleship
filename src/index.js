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
  computer1.gameboard.placeShip(0, 0, 'vertical', 4);
  display.game.updateLayout(player1.gameboard.layout);
  const attackOnClick = function(event) {
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    computer1.gameboard.receiveAttack(x, y);
    display.game.updateRecord(computer1.gameboard.record);
    computer1.attack(player1);
    display.game.updateLayout(player1.gameboard.record);
  }
  
  display.game.addRecordListener(attackOnClick);
}

display.playerScreen.onePlayerButton.addEventListener('click', start);
