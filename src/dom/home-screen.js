import { clean } from "./clean";

const homeScreen = (() => {
  const playButton = document.createElement('button');
  playButton.id = 'play-button';
  playButton.textContent = 'PLAY';
  const load = function() {
    clean();
    const main = document.querySelector('main');
    main.appendChild(playButton);
  }

  const addPlayHandler = function(callback) {
    playButton.addEventListener('click', callback);
  }

  return { load, addPlayHandler };
})();

export {
  homeScreen
};
