export class DOMEventStrategy {
	constructor(eventType, handlerFunction, targetElement) {
		this.eventType = eventType;
		this.handlerFunction = handlerFunction;
		this.targetElement = targetElement;
	}
	bind() {
		this.targetElement.addEventListener(this.eventType, this.handlerFunction);
	}
	remove() {
		this.targetElement.removeEventListener(
			this.eventType,
			this.handlerFunction,
		);
	}
}
