class Ship {
  constructor(size) {
    this.size = size;
    this.damage = [];
    this.damage.length = size;
    this.damage.fill(false);
  }
  
  hit(place) {
    this.damage[place] = true;
  }

  isSunk() {
    if(this.damage.every(function(current) {return current})) {
      return true;
    }
    
    else {
      return false;
    }
  }

}

export {
  Ship
};
