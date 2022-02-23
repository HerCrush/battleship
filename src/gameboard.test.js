import {Gameboard} from './gameboard';

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
  gameboard.placeShip(3, 3, 'horizontal', 3);
  expect(gameboard.layout[3][3]).toEqual({id: 0, part: 0});
  expect(gameboard.layout[4][3]).toEqual({id: 0, part: 1});
  expect(gameboard.layout[5][3]).toEqual({id: 0, part: 2});
  gameboard.placeShip(6, 6, 'vertical', 4);
  expect(gameboard.layout[6][6]).toEqual({id: 1, part: 0});
  expect(gameboard.layout[6][7]).toEqual({id: 1, part: 1});
  expect(gameboard.layout[6][8]).toEqual({id: 1, part: 2});
  expect(gameboard.layout[6][9]).toEqual({id: 1, part: 3});
});

test('can\'t place ships that overflow the gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(6, 0, 'horizontal', 5)).toBe('Ship overflows the gameboard.');
});

test('can\'t place ships that overlap with another ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 3, 'horizontal', 4);
  expect(gameboard.placeShip(4, 2, 'vertical', 3)).toBe('Ship overlaps with other ship.');
});

test('attack hits a ship or records missed shot', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 4, 'vertical', 3);
  gameboard.receiveAttack(4, 6);
  expect(gameboard.record[4][6]).toBe('hit');
  expect(gameboard.ships[0].damage[2]).toBe(true);
  gameboard.receiveAttack(7, 8);
  expect(gameboard.record[7][8]).toBe('miss');
});

test('reports when all ships are sunken', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 2, 'vertical', 3);
  gameboard.placeShip(4, 5, 'horizontal', 2);
  gameboard.receiveAttack(1, 2);
  gameboard.receiveAttack(1, 3);
  gameboard.receiveAttack(4, 5);
  gameboard.receiveAttack(5, 5);
  expect(gameboard.areAllShipsSunk()).toBe(false);
  gameboard.receiveAttack(1, 4);
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test('tells if a place has been already shot', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(1, 2);
  expect(gameboard.wasAlreadyShot(1, 2)).toBe(true);
  expect(gameboard.wasAlreadyShot(3, 5)).toBe(false);
});

test('can\'t attack same place twice', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(4, 4);
  expect(gameboard.receiveAttack(4, 4)).toBe('Repeated attack.');
});
