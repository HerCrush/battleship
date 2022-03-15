const dragStartHandler = function(event) {
  const shipData = event.dataTransfer;
  shipData.dataEffect = 'move';
  shipData.setData('text/plain', event.target.id);
  shipData.setData('offsetY', event.offsetY);
  shipData.setData('offsetX', event.offsetX);
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
    ship.style.display = 'none';
    cell = document.elementFromPoint(event.clientX, event.clientY);
    ship.style.display = 'flex';
  }

  const shipData = event.dataTransfer;
  const id = shipData.getData('text/plain');
  const ship = document.querySelector(`#${id}`);
  let xf = parseInt(cell.dataset.x);
  let offsetX = parseInt(shipData.getData('offsetX'));
  while(offsetX > cell.offsetWidth) {
    xf -= 1;
    if(xf < 0) {
      return gameboard;
    }
    
    offsetX = offsetX-cell.offsetWidth;
  }

  let yf = parseInt(cell.dataset.y);
  let offsetY = parseInt(shipData.getData('offsetY'));
  while(offsetY > cell.offsetHeight) {
    yf -= 1;
    if(yf < 0) {
      return gameboard;
    }
    
    offsetY = offsetY-cell.offsetHeight;
  }

  cell = document.querySelector(`.board-grid[data-x="${xf}"][data-y="${yf}"]`);
  if(shipData.getData('isPlaced')) {
    const xo = parseInt(shipData.getData('xo'));
    const yo = parseInt(shipData.getData('yo'));
    const move = gameboard.moveShip(xo, yo, xf, yf);
    if((move !== 'Ship overflows the gameboard.') && (move !== 'Ship overlaps with other ship.') && (move !== 'Ship is next to other ship.')) {
      cell.appendChild(ship);
    }
  }
  else {
    const place = gameboard.placeShip(xf, yf, ship.dataset.orientation, parseInt(ship.dataset.size));
    if((place !== 'Ship overflows the gameboard.') && (place !== 'Ship overlaps with other ship.') && (place !== 'Ship is next to other ship.')) {
      cell.appendChild(ship);
    }
  }

  return gameboard;
};

const clickHandler = function(event, gameboard) {
  const ship = event.target.parentElement;
  if(ship.parentElement.id === 'ships-container') {
    return gameboard;
  }

  const orientation = ship.dataset.orientation;
  const cell = ship.parentElement;
  const x = parseInt(cell.dataset.x);
  const y = parseInt(cell.dataset.y);
  const rotation = gameboard.rotateShip(x, y);
  if((rotation !== 'Ship overflows the gameboard.') && (rotation !== 'Ship overlaps with other ship.') && (rotation !== 'Ship is next to other ship.')) {
    if(orientation === 'vertical') {
      ship.dataset.orientation = 'horizontal';
    }
    else if(orientation === 'horizontal') {
      ship.dataset.orientation = 'vertical';
    }
  }

  return gameboard;
}

export {
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  clickHandler
}
