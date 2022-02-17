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
    if(orientation === 'horizontal') {
      if(ship.size <= 10-y) {
        for(let offset = 0; offset<ship.size; offset++) {
          this.layout[x][y+offset] = 'ship';
        }
      }
      else {
        return 'Ship overflows the gameboard.';
      }
    }

    else if(orientation === 'vertical') {
      if(ship.size <= 10-x) {
        for(let offset = 0; offset<ship.size; offset++) {
          this.layout[x+offset][y] = 'ship';
        }
      }
      else {
        return 'Ship overflows the gameboard.';
      }
    }
  }
}

export {
  Gameboard
};
