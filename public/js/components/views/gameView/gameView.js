import Section from '../baseView.js';
import Game from '../../../modules/game/game.js';
import bus from '../../../modules/bus.js';

/**
 * Class representing Section of the game
 */
export default class GameSection extends Section {
	/**
	 * Creates game section
	 */
	constructor() {
		super();

		this.parent = document.getElementById('game');
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('wrapper');
		console.log(screen.width, ' ', document.documentElement.clientWidth);


		this.wrapper.innerHTML += generateCanvas(
			{
				'width': window.innerWidth * 0.7,
				'height': window.innerHeight * 0.7,
				'id': 'game-canvas'
			}
		);


		this.parent.appendChild(this.wrapper);
		//this.info_canvas = document.getElementById('info-canvas');
		this.game_canvas = document.getElementById('game-canvas');
		// this.change_canvas = document.getElementById('change-canvas');
		//this.control_canvas = document.getElementById('control-canvas');
	}

	/**
	 * @return {HTMLDivElement | *}
	 */
	render() {

		this.game = new Game({}, this.game_canvas);
		this.game.start();
		this.setWindowResizeHandler();


		return this.wrapper;
	}

	/**
	 * @return {boolean}
	 */
	allowed() {
		// return User.isAuthorized();
		return true;
	}

	computeCanvasSize() {
		//const size = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;
		return [window.innerWidth * 0.9, window.innerHeight * 0.9];
	}

	setWindowResizeHandler() {
		window.addEventListener('resize', () => {
			[this.game_canvas.width, this.game_canvas.height] = this.computeCanvasSize();
			bus.emit('resize', {
				width: this.game_canvas.width,
				height: this.game_canvas.height
			});
		});
		return this;
	}
}
