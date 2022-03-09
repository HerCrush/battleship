import { Gameboard } from "./gameboard";

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  attack(player) {
    let randomX = Math.round(Math.random()*9);
    let randomY = Math.round(Math.random()*9);
    while(player.gameboard.receiveAttack(randomX, randomY) === 'Repeated attack.') {
      randomX = Math.round(Math.random()*9);
      randomY = Math.round(Math.random()*9);
    }
  }
}

export {
  Player
};
