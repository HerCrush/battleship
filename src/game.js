import {Player} from "./player";

const game = (() => {
  const player1 = new Player();
  const computer1 = new Player();
  const start = function() {
    player1.gameboard.placeShip(1, 1, 'horizontal', 3);
    computer1.gameboard.placeShip(0, 0, 'vertical', 4);
  }

  const doPcTurn = function() {
      computer1.attack(player1);
  }

  const doPlayerTurn = function(x, y) {
    if(computer1.gameboard.receiveAttack(x, y) !== 'Repeated attack.') {
      return true;
    }
    else {
      return false;
    }
  }

  const checkStatus = function() {
    if(player1.gameboard.areAllShipsSunk()) {
      return 'pc wins';
    }
    else if(computer1.gameboard.areAllShipsSunk()) {
      return 'player wins';
    }
  }
  
  return {
    player1,
    computer1,
    start,
    doPcTurn,
    doPlayerTurn,
    checkStatus
  };
})();

export {
  game
};
