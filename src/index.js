import './reset.css';
import './style.css';
import {Player} from './player';
import {display} from './display';

display.home.playButton.addEventListener('click', display.playerScreen.load);

display.playerScreen.onePlayerButton.addEventListener('click', display.game.load);
