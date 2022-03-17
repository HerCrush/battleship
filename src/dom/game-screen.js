import { clean } from './clean';

const gameScreen = (() => {
  const loadGameboard = function() {
    const frame = document.createElement('div');
    frame.classList.add('board-frame');
    const board = document.createElement('div');
    board.classList.add('board');
    const xAxis = document.createElement('div');
    xAxis.classList.add('x-axis');
    for(let i = 0; i<10; i++) {
      const letter = document.createElement('p');
      letter.textContent = String.fromCharCode(65+i);
      xAxis.appendChild(letter);
    }

    const yAxis = document.createElement('div');
    yAxis.classList.add('y-axis');
    for(let i = 1; i<=10; i++) {
      const number = document.createElement('p');
      number.textContent = i;
      yAxis.appendChild(number);
    }

    const grid = [];
    for(let i = 0; i<10; i++) {
      grid.push([]);
      for(let j = 0; j<10; j++) {
        grid[i].push(document.createElement('div'));
        grid[i][j].classList.add('board-grid');
        grid[i][j].dataset.x = i;
        grid[i][j].dataset.y = j;
      }
    }

    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++) {
        board.appendChild(grid[j][i]);
      }
    }

    const clean = function() {
      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++) {
          while(grid[i][j].firstChild) {
            grid[i][j].className = 'board-grid';
          }
        }
      }
    }

    frame.append(xAxis, yAxis, board);
    return {
      frame,
      grid,
      clean
    };
  }

  const layoutGameboard = loadGameboard();
  const recordGameboard = loadGameboard();
  const load = function() {
    clean();
    layoutGameboard.clean();
    recordGameboard.clean();
    const container = document.createElement('div');
    container.id = 'gameboard-container';
    container.append(layoutGameboard.frame, recordGameboard.frame);
    const main = document.querySelector('main');
    main.appendChild(container);
  }

  const updateLayout = function(referenceGameboard) {
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++) {
        const referenceCell = referenceGameboard[i][j];
        const layoutCell = layoutGameboard.grid[i][j];
        if(referenceCell === 'hit') {
          layoutCell.classList.add('self-hit');
        }
        else if(referenceCell === 'miss') {
          layoutCell.classList.add('self-miss');
        }
        else if((referenceCell !== 'water') && (referenceCell !== null)) {
          layoutCell.classList.add('ship');
        }
      }
    }
  }

  const updateRecord = function(referenceGameboard) {
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++) {
        const referenceCell = referenceGameboard[i][j];
        const recordCell = recordGameboard.grid[i][j];
        if(referenceCell === 'hit') {
          recordCell.classList.add('hit');
        }
        else if(referenceCell === 'miss') {
          recordCell.classList.add('miss');
        }
      }
    }
  }

  const addRecordHandler = function(callback) {
    recordGameboard.grid.forEach(column => {
      column.forEach(cell => {
        cell.addEventListener('click', function(event) {
          const x = event.target.dataset.x;
          const y = event.target.dataset.y;
          callback(x, y);
        });
      });
    });
  }

  const playAgainButton = document.createElement('button');
  playAgainButton.id = 'play-again-button';
  playAgainButton.textContent = 'PLAY AGAIN';
  const homeButton = document.createElement('button');
  homeButton.id = 'home-button';
  homeButton.textContent = 'HOME';
  const loadGameOverScreen = function(winner) {
    const blockingScreen = document.createElement('div');
    blockingScreen.id = 'blocking-screen';
    const container = document.createElement('div');
    container.id = 'game-over-container';
    const gameOverText = document.createElement('h2');
    gameOverText.textContent = 'GAME OVER';
    const winnerText = document.createElement('h3');
    winnerText.textContent = `${winner} wins!`;
    container.append(gameOverText, winnerText, playAgainButton, homeButton);
    blockingScreen.appendChild(container);
    const main = document.querySelector('main');
    main.appendChild(blockingScreen);
  }

  const addPlayAgainHandler = function(callback) {
    playAgainButton.addEventListener('click', callback);
  }

  const addHomeHandler = function(callback) {
    homeButton.addEventListener('click', callback);
  }

  return {
    load,
    updateLayout,
    updateRecord,
    addRecordHandler,
    loadGameOverScreen,
    addPlayAgainHandler,
    addHomeHandler
  };
})();

export {
  gameScreen
};
