const display = (() => {
  const main = document.querySelector('main');
  const home = (() => {
    const playButton = document.querySelector('#play-button');
    return {playButton};
  })();

  const clean = function() {
    while(main.firstChild) {
      main.removeChild(main.lastChild);
    }
  };

  const playerScreen = (() => {
    const onePlayerButton = document.createElement('button');
    onePlayerButton.id = 'one-player-button';
    onePlayerButton.textContent = 'ONE PLAYER';
    const load = function() {
      clean(main);
      main.appendChild(onePlayerButton);
    }

    return {onePlayerButton, load};
  })();

  const game = (() => {
    const makeGameboard = function() {
      const frame = document.createElement('div');
      frame.classList.add('board-frame');
      const grid = [];
      for(let i = 0; i<10; i++) {
        grid.push([]);
        for(let j = 0; j<10; j++){
          grid[i].push(document.createElement('div'));
          grid[i][j].classList.add('board-grid');
          frame.appendChild(grid[i][j]);
        }
      }

      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++){
          frame.appendChild(grid[j][i]);
        }
      }

      const makeShip = function(x, y, orientation, size) {
        if(orientation === 'horizontal') {
          for(let offset = 0; offset<size; offset++) {
            grid[x+offset][y].classList.add('ship');
          }
        }
    
        else if(orientation === 'vertical') {
          for(let offset = 0; offset<size; offset++) {
            grid[x][y+offset].classList.add('ship');
          }
        }
      }

      return {
        frame,
        grid,
        makeShip
      };
    }

    const player1Layout = makeGameboard();
    const player1Record = makeGameboard();
    const load = function() {
      clean();
      const container = document.createElement('div');
      container.id = 'game-container';
      container.append(player1Layout.frame, player1Record.frame);
      main.appendChild(container);
    }

    return {
      player1Layout,
      player1Record,
      load
    };
  })();

  return {
    home,
    playerScreen,
    game
  };
})();

export {
  display
};
