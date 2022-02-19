import {Player} from './player';
import {Gameboard} from './gameboard';

test('each player has a gameboard', () => {
  const player = new Player();
  expect(player.gameboard).toBeInstanceOf(Gameboard);
});

test('a player can attack other player', () => {
  const playerOne = new Player();
  const playerTwo = new Player();
  playerOne.attack(playerTwo);
  expect(playerTwo.gameboard.record.flat()).toContain('miss');
});