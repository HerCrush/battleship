import {clean} from "./clean";

const shipPlacementScreen = (() => {
  const layoutGameboard = (() => {
    const frame = document.createElement('div');
    frame.classList.add('board-frame');
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
        frame.appendChild(grid[j][i]);
      }
    }

    return {
      frame,
      grid
    };
  })();

  const readyButton = document.createElement('button');
  const load = function() {
    clean();
    const container = document.createElement('div');
    container.id = 'gameboard-container';
    container.append(layoutGameboard.frame);
    readyButton.textContent = 'READY';
    const main = document.querySelector('main');
    main.append(container, readyButton);
  }

  const addReadyHandler = function(callback) {
    readyButton.addEventListener('click', function() {
      callback();
      readyButton.remove();
    });
  }

  return {
    load,
    addReadyHandler
  }
})();

export {
  shipPlacementScreen
};
