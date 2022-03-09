import { Gameboard } from "../gameboard";

const dragStartHandler = function(event) {
  const shipData = event.dataTransfer;
  shipData.dataEffect = 'move';
  shipData.setData('text/plain', event.target.id);
  const parent = event.target.parentElement;
  if(parent.className.includes('board-grid')) {
    shipData.setData('isPlaced', 'true');
    shipData.setData('xo', parent.dataset.x);
    shipData.setData('yo', parent.dataset.y);
  }
};

const dragOverHandler = function(event) {
  event.preventDefault();
  event.dataTransfer.dataEffect = 'move';
};

const dropHandler = function(event, gameboard) {
  event.preventDefault();
  let cell = event.target;
  if(cell.className.includes('draggable-ship-part')) {
    const ship = cell.parentElement;
    ship.hidden = true;
    cell = document.elementFromPoint(event.clientX, event.clientY);
    ship.hidden = false;
  }

  const shipData = event.dataTransfer;
  const id = shipData.getData('text/plain');
  const ship = document.querySelector(`#${id}`);
  const xf = parseInt(cell.dataset.x);
  const yf = parseInt(cell.dataset.y);
  if(shipData.getData('isPlaced')) {
    const xo = parseInt(shipData.getData('xo'));
    const yo = parseInt(shipData.getData('yo'));
    const move = gameboard.moveShip(xo, yo, xf, yf);
    if((move !== 'Ship overflows the gameboard.') && (move !== 'Ship overlaps with other ship.')) {
      cell.appendChild(ship);
    }
  }
  else {
    const place = gameboard.placeShip(xf, yf, ship.dataset.orientation, ship.dataset.size);
    if((place !== 'Ship overflows the gameboard.') && (place !== 'Ship overlaps with other ship.')) {
      cell.appendChild(ship);
    }
  }
};

export {
  dragStartHandler,
  dragOverHandler,
  dropHandler
}
