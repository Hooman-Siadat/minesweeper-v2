export class Cell {
	constructor(options = {}) {
		const defaults = {
			row: 0,
			col: 0,
			isMine: false,
			isRevealed: false,
			isFlagged: false,
			adjacentMineCount: 0,
		};

		// Optional - for future extension - OCP
		Object.assign(this, { ...defaults, ...options });
	}

	setIsMine(value) {
		this.isMine = value;
	}

	setIsRevealed(value) {
		this.isRevealed = value;
	}

	setIsFallged(value) {
		this.isFlagged = value;
	}

	setAdjacentMineCount(value) {
		this.adjacentMineCount = value;
	}
}
