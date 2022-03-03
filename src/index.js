import './reset.css';
import './style.css';
import {game} from './game';
import {homeScreen} from './dom/home-screen';
import {playerScreen} from './dom/player-screen';
import {gameScreen} from './dom/game-screen';

homeScreen.playButton.addEventListener('click', playerScreen.load);

playerScreen.onePlayerButton.addEventListener('click', function() {
  gameScreen.load();
  gameScreen.addReadyHandler(function() {
    game.start();
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
  });
});

//THINK IT BACKWARDS
