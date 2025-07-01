// eventManager.js
export class EventManager {
	constructor(events = []) {
		this.events = events;
		this.bindAll();
	}

	bindAll() {
		this.events.forEach((event) => event.bind());
	}

	removeAll() {
		this.events.forEach((event) => event.remove());
	}
}
