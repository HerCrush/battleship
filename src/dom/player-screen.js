import { clean } from './clean';

const playerScreen = (() => {
  const onePlayerButton = document.createElement('button');
  onePlayerButton.id = 'one-player-button';
  onePlayerButton.textContent = 'ONE PLAYER';
  const load = function() {
    clean();
    const main = document.querySelector('main');
    main.appendChild(onePlayerButton);
  }

  return {onePlayerButton, load};
})();

export {
  playerScreen
};
