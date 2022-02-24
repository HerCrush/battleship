import './reset.css';
import './style.css';
import {game} from './game';
import {display} from './display';

display.home.playButton.addEventListener('click', display.playerScreen.load);

display.playerScreen.onePlayerButton.addEventListener('click', function() {
  display.game.load();
  game.start();
  display.game.updateLayout(game.player1.gameboard.layout);
  display.game.addRecordAction(function(x, y) {
    if(game.doPlayerTurn(x, y)) {
      display.game.updateRecord(game.computer1.gameboard.record);
      if(game.checkStatus() === 'player wins') {
        display.game.loadGameOverScreen('player');
      }
      else {
        game.doPcTurn();
        display.game.updateLayout(game.player1.gameboard.record);
        if(game.checkStatus() === 'pc wins') {
          display.game.loadGameOverScreen('pc');
        }
      }
    }
  });
});
