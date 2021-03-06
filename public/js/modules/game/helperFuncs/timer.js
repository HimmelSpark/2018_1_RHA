import bus from '../../bus.js';

export const timer = (htmlElement) => {
	let sec = 30;
	let isPaused = false;
	let g = setInterval(() => {
		if (isPaused) {
			++sec;
		}
		--sec;
		if (sec >= 10) {
			htmlElement.innerHTML = '00:' + sec;
		} else {
			htmlElement.innerHTML = '00:0' + sec;
		}
		if (sec === 0) {
			clearInterval(g);
			// bus.emit('left-click-change', {}); //TODO вернуть после разработки
		}
	}, 1000);
	bus.on('left-click-change', () => {
		//sec = 0;
		clearInterval(g);
	});
	bus.on('stop-timer', () => {
		//sec = 0;
		clearInterval(g);
	});
	bus.on('attack', () => {
		isPaused = true;
		setTimeout(() => {isPaused = false;}, 1000);
	});
};