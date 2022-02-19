import {Gameboard} from "./gameboard";

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  attack(player) {
    let randomX = Math.round(Math.random()*9);
    let randomY = Math.round(Math.random()*9);
    while(player.gameboard.wasAlreadyShot(randomX, randomY)) {
      randomX = Math.round(Math.random()*9);
      randomY = Math.round(Math.random()*9);
    }
    player.gameboard.receiveAttack(randomX, randomY);
  }
}

export {
  Player
};
