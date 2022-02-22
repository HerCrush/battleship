const display = (() => {
  const main = document.querySelector('main');
  const home = (() => {
    const playButton = document.querySelector('#play-button');
    return {playButton};
  })();

  const removeChildren = function(parent) {
    while(parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  const playerScreen = (() => {
    const onePlayerButton = document.createElement('button');
    onePlayerButton.id = 'one-player-button';
    onePlayerButton.textContent = 'ONE PLAYER';
    const load = function() {
      removeChildren(main);
      main.append(onePlayerButton);
    }

    return {onePlayerButton, load};
  })();

  const game = (() => {
    const loadGameboard = function() {
      
    }
  })();

  return {
    home,
    playerScreen
  };
})();

export {
  display
};
