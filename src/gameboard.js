class Gameboard {
  constructor() {
    this.layout = [];
    this.layout.length = 10;
    this.layout.forEach(function(element) {
      element = [];
      element.length = 10;
      element.fill('water');
    });
  }

  placeShip(ship, x, y, orientation) {
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
}

export {
  Gameboard
};
