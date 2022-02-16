import {Gameboard} from './gameboard';
import {Ship} from './ship';

test('layout is a two dimensional array filled with water', () => {
  const gameboard = new Gameboard();
  expect(gameboard.layout.every(function(x) {
    return x.every(function(y) {
      if(y === 'water') {
        return true;
      }
    });
  })).toBe(true);
});

test('can place ships at given coordinates', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(3), 3, 3, 'horizontal');
  expect(gameboard.layout[3][3]).toBe('ship');
  expect(gameboard.layout[3][4]).toBe('ship');
  expect(gameboard.layout[3][5]).toBe('ship');
});
