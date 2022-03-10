import { Gameboard } from "./gameboard";

const chooseRandomCoordinates = function() {
  let x = Math.round(Math.random()*9);
  let y = Math.round(Math.random()*9);
  return { x, y };
}

const chooseRandomOrientation = function() {
  const random = Math.round(Math.random());
  if(random === 0) {
    return 'vertical';
  }
  else if(random === 1) {
    return 'horizontal';
  }
}

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  makeRandomAttack(player) {
    let { x, y } = chooseRandomCoordinates();
    while(player.gameboard.receiveAttack(x, y) === 'Repeated attack.') {
      ({ x, y } = chooseRandomCoordinates());
    }
  }

  placeShipAtRandom(size) {
    let { x, y } = chooseRandomCoordinates();
    let orientation = chooseRandomOrientation();
    let place = this.gameboard.placeShip(x, y, orientation, size);
    while((place === 'Ship overflows the gameboard.') || (place === 'Ship overlaps with other ship.')) {
      ({ x, y } = chooseRandomCoordinates());
      orientation = chooseRandomOrientation();
      place = this.gameboard.placeShip(x, y, orientation, size);
    }
  }

  placeAllShipsAtRandom() {
    this.placeShipAtRandom(5);
    this.placeShipAtRandom(4);
    this.placeShipAtRandom(3);
    this.placeShipAtRandom(3);
    this.placeShipAtRandom(2);
  }
}

export {
  Player
};
