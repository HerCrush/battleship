import './styles/reset.css';
import './styles/style.css';
import { game } from './game';
import { homeScreen } from './dom/home-screen';
import { playerScreen } from './dom/player-screen';
import { shipPlacementScreen } from './dom/ship-placement-screen';
import { gameScreen } from './dom/game-screen';

const newGame = function() {
  if(shipPlacementScreen.areAllShipsPlaced()) {
    game.start();
    const ships = shipPlacementScreen.getShips();
    game.placeShips(ships);
    gameScreen.load();
    gameScreen.updateLayout(game.player1.gameboard.layout);
    gameScreen.addRecordHandler(function(x, y) {
      if(game.doPlayerTurn(x, y)) {
        gameScreen.updateRecord(game.computer1.gameboard.record);
        if(game.checkStatus() === 'player wins') {
          gameScreen.loadGameOverScreen('player');
        }
        else {
          game.doPcTurn();
          gameScreen.updateLayout(game.player1.gameboard.record);
          if(game.checkStatus() === 'pc wins') {
            gameScreen.loadGameOverScreen('pc');
          }
        }
      }
    });
  }
};

const startShipPlacement = function() {
  shipPlacementScreen.load();
  shipPlacementScreen.addReadyHandler(newGame, {once: true});
};

const selectPlayer = function() {
  playerScreen.load();
  playerScreen.addOnePlayerHandler(startShipPlacement, {once: true});
};

homeScreen.load();
homeScreen.addPlayHandler(selectPlayer);
