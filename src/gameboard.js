import {Ship} from "./ship";

const create2DArray = function(filling = null) {
  let array = [];
  for(let i = 0; i<10; i++) {
    array.push([]);
    for(let j = 0; j<10; j++){
      array[i].push(filling);
    }
  }
  
  return array;
}

const checkSpace = function(layout, size, x, y, orientation) {
  if(orientation === 'horizontal') {
    if(size > 10-x) {
      throw 'Ship overflows the gameboard.';
    }

    else {
      for(let offset = 0; offset<size; offset++) {
        if(layout[x+offset][y] !== 'water') {
          throw 'Ship overlaps with other ship.';
        }
      }
    }
  }

  else if(orientation === 'vertical') {
    if(size > 10-y) {
      throw 'Ship overflows the gameboard.';
    }

    else {
      for(let offset = 0; offset<size; offset++) {
        if(layout[x][y+offset] !== 'water') {
          throw 'Ship overlaps with other ship.';
        }
      }
    }
  }
}

const checkAttack = function(x, y, gameboard) {
  if((gameboard.record[x][y] === 'hit') || (gameboard.record[x][y] === 'miss')) {
    throw 'Repeated attack.';
  }
}

class Gameboard {
  constructor() {
    this.layout = create2DArray('water');
    this.record = create2DArray();
    this.ships = [];
  }

  placeShip(x, y, orientation, size) {
    try {
      checkSpace(this.layout, size, x, y, orientation);
    } catch(error) {
      return error;
    }

    this.ships.push(new Ship(size));
    const shipID = this.ships.length-1;
    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x+offset][y] = {
          id: shipID,
          part: offset
        };
      }
    }

    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x][y+offset] = {
          id: shipID,
          part: offset
        };
      }
    }
  }

  receiveAttack(x, y) {
    try {
      checkAttack(x, y, this);
    } catch(error) {
      return error;
    }
    const shot = this.layout[x][y];
    if(shot === 'water') {
      this.record[x][y] = 'miss';
    }

    else {
      this.ships[shot.id].hit(shot.part);
      this.record[x][y] = 'hit';
    }
  }

  areAllShipsSunk() {
    return this.ships.every(function(ship) {return ship.isSunk()});
  }

  wasAlreadyShot(x, y) {
    if(this.record[x][y] === 'miss' || this.record[x][y] === 'hit') {
      return true;
    }
    else {
      return false;
    }
  }
}

export {
  Gameboard
};
