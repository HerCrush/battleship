import {Player} from "./player";

const game = (() => {
  const player1 = new Player();
  const computer1 = new Player();
  const placeShips = function(ships) {
    ships.forEach(function(ship) {
      player1.gameboard.placeShip(ship.x, ship.y, ship.orientation, ship.size);
    });
  };

  const start = function() {
    computer1.gameboard.placeShip(0, 0, 'vertical', 4);
  };

  const doPcTurn = function() {
      computer1.attack(player1);
  };

  const doPlayerTurn = function(x, y) {
    if(computer1.gameboard.receiveAttack(x, y) !== 'Repeated attack.') {
      return true;
    }
    else {
      return false;
    }
  };

  const checkStatus = function() {
    if(player1.gameboard.areAllShipsSunk()) {
      return 'pc wins';
    }
    else if(computer1.gameboard.areAllShipsSunk()) {
      return 'player wins';
    }
  };
  
  return {
    player1,
    computer1,
    placeShips,
    start,
    doPcTurn,
    doPlayerTurn,
    checkStatus
  };
})();

export {
  game
};
