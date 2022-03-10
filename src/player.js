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
    this.lastAttack = { x: null, y: null, shot: null, shipOrientation: 'unknown', foundShip: false };
  }

  makeRandomAttack(player) {
    let x = this.lastAttack.x;
    let y = this.lastAttack.y;
    if((this.lastAttack.foundShip) && (this.lastAttack.shipOrientation === 'unknown')) {
      do {
        switch(Math.round(Math.random()*3)) {
          case 0:  //up
            if(this.lastAttack.y > 0) {
              y = this.lastAttack.y-1;
              break;
            }
          case 1:  //right
            if(this.lastAttack.x < 9) {
              x = this.lastAttack.x+1;
              break;
            }
          case 2:  //down
            if(this.lastAttack.y < 9) {
              y = this.lastAttack.y+1;
              break;
            }
          case 3:  //left
            if(this.lastAttack.x > 0) {
              x = this.lastAttack.x-1;
              break;
            }
        }
      } while(player.gameboard.receiveAttack(x, y) === 'Repeated attack.');

      if(player.gameboard.record[x][y] === 'hit') {
        if(x === this.lastAttack.x) {
          this.lastAttack.shipOrientation = 'vertical';
        }
        else {
          this.lastAttack.shipOrientation = 'horizontal';
        }

        this.lastAttack.x = x;
        this.lastAttack.y = y;
        this.lastAttack.shot = player.gameboard.record[x][y];
      }
    }
    else if(this.lastAttack.shipOrientation === 'vertical') {
      switch(Math.round(Math.random())) {
        case 0:  //try up
          y = this.lastAttack.y-1;
          while((y > 0) && (player.gameboard.record[x][y] === 'hit')) {
            y -= 1;
          }

          if((y >= 0) && (player.gameboard.record[x][y] !== 'miss')) {
            break;
          }

        case 1:  //try down
          y = this.lastAttack.y+1;
          while((y < 9) && (player.gameboard.record[x][y] === 'hit')) {
            y += 1;
          }

          if((y > 9) || (player.gameboard.record[x][y] === 'miss')) {
            y = this.lastAttack.y-1;
            while((y > 0) && (player.gameboard.record[x][y] === 'hit')) {
              y -= 1;
            }

            if((y < 0) || (player.gameboard.record[x][y] === 'miss')) {
              this.lastAttack.foundShip = false;
              this.lastAttack.shipOrientation = 'unknown';
              this.makeRandomAttack(player);
              return;
            }
          }

          break;
      }

      player.gameboard.receiveAttack(x, y);
      if(player.gameboard.record[x][y] === 'hit') {
        this.lastAttack.x = x;
        this.lastAttack.y = y;
        this.lastAttack.shot = player.gameboard.record[x][y];
      }
    }
    else if(this.lastAttack.shipOrientation === 'horizontal') {
      switch(Math.round(Math.random())) {
        case 0:  //try left
          x = this.lastAttack.x-1;
          while((x > 0) && (player.gameboard.record[x][y] === 'hit')) {
            x -= 1;
          }

          if((x >= 0) && (player.gameboard.record[x][y] !== 'miss')) {
            break;
          }
        case 1:  //try right
          x = this.lastAttack.x+1;
          while((x < 9) && (player.gameboard.record[x][y] === 'hit')) {
            x += 1;
          }

          if((x > 9) || (player.gameboard.record[x][y] === 'miss')) {
            x = this.lastAttack.x-1;
            while((x > 0) && (player.gameboard.record[x][y] === 'hit')) {
              x -= 1;
            }

            if((x < 0) || (player.gameboard.record[x][y] === 'miss')) {
              this.lastAttack.foundShip = false;
              this.lastAttack.shipOrientation = 'unknown';
              this.makeRandomAttack(player);
              return;
            }
          }

          break;
      }

      player.gameboard.receiveAttack(x, y);
      if(player.gameboard.record[x][y] === 'hit') {
        this.lastAttack.x = x;
        this.lastAttack.y = y;
        this.lastAttack.shot = player.gameboard.record[x][y];
      }
    }
    else {
      do {
        ({ x, y } = chooseRandomCoordinates());
      } while(player.gameboard.receiveAttack(x, y) === 'Repeated attack.');

      if(player.gameboard.record[x][y] === 'hit') {
        this.lastAttack.foundShip = true;
        this.lastAttack.x = x;
        this.lastAttack.y = y;
      }

      this.lastAttack.shot = player.gameboard.record[x][y];
    }
  }

  placeShipAtRandom(size) {
    let { x, y } = chooseRandomCoordinates();
    let orientation = chooseRandomOrientation();
    let place = this.gameboard.placeShip(x, y, orientation, size);
    while((place === 'Ship overflows the gameboard.') || (place === 'Ship overlaps with other ship.') || (place === 'Ship is next to other ship.')) {
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
