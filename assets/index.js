import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins:[//new AutoPlay()
], });

const button = document.querySelector('#playpause');
button.onclick = () => player.togglePlay();
const muteunmute = document.querySelector('#muteunmute');
muteunmute.onclick = () => player.togglemute();

