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
  const gameboard1 = new Gameboard();
  gameboard1.placeShip(new Ship(3), 3, 3, 'horizontal');
  expect(gameboard1.layout[3][3]).toBe('ship');
  expect(gameboard1.layout[4][3]).toBe('ship');
  expect(gameboard1.layout[5][3]).toBe('ship');
  const gameboard2 = new Gameboard();
  gameboard2.placeShip(new Ship(4), 6, 6, 'vertical');
  expect(gameboard2.layout[6][6]).toBe('ship');
  expect(gameboard2.layout[6][7]).toBe('ship');
  expect(gameboard2.layout[6][8]).toBe('ship');
  expect(gameboard2.layout[6][9]).toBe('ship');
});

test('can\'t place ships that overflow the gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(new Ship(5), 6, 0, 'horizontal')).toBe('Ship overflows the gameboard.');
});

test('can\'t place ships that overlap with another ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(4), 3, 3, 'horizontal');
  expect(gameboard.placeShip(new Ship(3), 4, 2, 'vertical')).toBe('Ship overlaps with other ship.');
});

// test('attack hits a ship or records missed shot', () => {
//   const gameboard = new Gameboard();
//   const ship = new Ship(3);
//   gameboard.placeShip(ship, 4, 4, 'vertical');
//   gameboard.receiveAttack(4, 6);
//   expect(ship.damage[2]).toBe(true);
//   expect(gameboard.record[4][6]).toBe('hit');
//   gameboard.receiveAttack(7, 8);
//   expect(gameboard.record[7][8]).toBe('miss');
// });
