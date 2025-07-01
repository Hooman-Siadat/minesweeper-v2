export class Timer {
	constructor(onTickCallback) {
		this.startTime = 0;
		this.intervalId = 0;
		this.onTick = onTickCallback;
	}

	start() {
		this.startTime = Date.now();
		this.intervalId = setInterval(() => {
			const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
			this.onTick(elapsed);
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = 0;
	}

	reset() {
		this.stop();
		this.startTime = 0;
	}
}
