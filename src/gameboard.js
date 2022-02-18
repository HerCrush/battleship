const checkSpace = function(layout, ship, x, y, orientation) {
  if(orientation === 'horizontal') {
    if(ship.size > 10-x) {
      throw 'Ship overflows the gameboard.';
    }

    else {
      for(let offset = 0; offset<ship.size; offset++) {
        if(layout[x+offset][y] === 'ship') {
          throw 'Ship overlaps with other ship.';
        }
      }
    }
  }

  else if(orientation === 'vertical') {
    if(ship.size > 10-y) {
      throw 'Ship overflows the gameboard.';
    }

    else {
      for(let offset = 0; offset<ship.size; offset++) {
        if(layout[x][y+offset] === 'ship') {
          throw 'Ship overlaps with other ship.';
        }
      }
    }
  }
}

class Gameboard {
  constructor() {
    this.layout = [];
    this.layout.length = 10;
    let row = [];
    row.length = 10;
    row.fill('water');
    this.layout.fill(row);
  }

  placeShip(ship, x, y, orientation) {
    try {
      checkSpace(this.layout, ship, x, y, orientation);
    } catch(error) {
      return error;
    }

    if(orientation === 'horizontal') {
      for(let offset = 0; offset<ship.size; offset++) {
        this.layout[x+offset][y] = 'ship';
      }
    }

    else if(orientation === 'vertical') {
      for(let offset = 0; offset<ship.size; offset++) {
        this.layout[x][y+offset] = 'ship';
      }
    }
  }

  receiveAttack(x, y) {
    
  }
}

export {
  Gameboard
};
