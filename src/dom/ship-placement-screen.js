import { clean } from "./clean";
import { Gameboard } from "../gameboard";
import { dragStartHandler, dragOverHandler, dropHandler, clickHandler } from "./drag-and-drop";

const shipPlacementScreen = (() => {
  const layoutRecord = new Gameboard();
  const layoutGameboard = (() => {
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
        grid[j][i].addEventListener('dragover', dragOverHandler);
        grid[j][i].addEventListener('drop', function(event) {
          const updatedLayout = dropHandler(event, layoutRecord);
          layoutRecord.layout = updatedLayout.layout;
          layoutRecord.ships = updatedLayout.ships;
        });
      }
    }

    const clean = function() {
      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++) {
          while(grid[i][j].firstChild) {
            grid[i][j].removeChild(grid[i][j].lastChild);
          }
        }
      }

      layoutRecord.clean();
    }

    frame.append(xAxis, yAxis, board);
    return {
      frame,
      grid,
      clean
    };
  })();

  const makeShip = function(size) {
    const ship = document.createElement('div');
    ship.setAttribute('draggable', 'true');
    ship.classList.add('draggable-ship');
    ship.dataset.size = size;
    ship.dataset.orientation = 'vertical';
    for(let part = 0; part<size; part++) {
      const shipPart = document.createElement('div');
      shipPart.classList.add('draggable-ship-part');
      shipPart.dataset.part = part;
      ship.appendChild(shipPart);
    }

    ship.addEventListener('dragstart', dragStartHandler);
    ship.addEventListener('click', function(event) {
      const updatedLayout = clickHandler(event, layoutRecord);
      layoutRecord.layout = updatedLayout.layout;
      layoutRecord.ships = updatedLayout.ships;
    });
    return ship;
  }

  const readyButton = document.createElement('button');
  readyButton.id = 'ready-button';
  readyButton.textContent = 'READY';
  const container = document.createElement('div');
  container.id = 'gameboard-container';
  const shipsContainer = document.createElement('div');
  shipsContainer.id = 'ships-container';
  container.append(shipsContainer, layoutGameboard.frame);
  const load = function() {
    clean();
    layoutGameboard.clean();
    const carrier = makeShip(5);
    carrier.id = 'carrier';
    const battleship = makeShip(4);
    battleship.id = 'battleship';
    const cruiser = makeShip(3);
    cruiser.id = 'cruiser';
    const submarine = makeShip(3);
    submarine.id = 'submarine';
    const destroyer = makeShip(2);
    destroyer.id = 'destroyer';
    shipsContainer.append(carrier, battleship, cruiser, submarine, destroyer);
    const main = document.querySelector('main');
    main.append(container, readyButton);
  }

  const addReadyHandler = function(callback) {
    readyButton.addEventListener('click', callback);
  }

  const areAllShipsPlaced = function() {
    return !shipsContainer.hasChildNodes();
  }

  const getShips = function() {
    const ships = [];
    for(let i = 0; i<10; i++) {
      for(let j = 0; j<10; j++) {
        const cell = layoutGameboard.grid[i][j];
        const ship = cell.firstChild;
        if(cell.hasChildNodes()) {
          ships.push({
            x: cell.dataset.x,
            y: cell.dataset.y,
            orientation: ship.dataset.orientation,
            size: ship.dataset.size
          });
        }
      }
    }
    
    return ships;
  }

  return {
    load,
    addReadyHandler,
    areAllShipsPlaced,
    getShips
  }
})();

export {
  shipPlacementScreen
};
