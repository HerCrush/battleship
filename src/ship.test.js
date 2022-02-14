import {Ship} from './ship';

test('create a ship object with size and damage properties', () => {
  expect(new Ship(3)).toEqual({size: 3, damage: [false, false, false]});
});

test('hit method marks a position as damaged', () => {
  const ship = new Ship(4);
  ship.hit(1);
  expect(ship.damage).toEqual([false, true, false, false]);
});

test('isSunk returns true when ship is fully damaged', () => {
  const ship = new Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});
