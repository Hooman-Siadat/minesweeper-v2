export class GridGenerator {
	constructor(
		Cell,
		DOMEventStrategy,
		EventManager,
		boardLayoutMetrics,
		CELL_SIZE,
		options = {},
	) {
		// Dependancies
		this.Cell = Cell;
		this.DOMEventStrategy = DOMEventStrategy;
		this.EventManager = EventManager;

		this.boardLayoutMetrics = boardLayoutMetrics;
		this.CELL_SIZE = CELL_SIZE;

		// Optional - for future extension - OCP
		Object.assign(this, options);
	}

	get boardSize() {
		const {
			width: boardWidth,
			height: boardHeight,
			rowGap,
			colGap,
			padding,
		} = this.boardLayoutMetrics;

		const columnCount = Math.floor(
			(boardWidth - 2 * padding) / (parseInt(this.CELL_SIZE) + colGap),
		);
		const rowCount = Math.floor(
			(boardHeight - 2 * padding) / (parseInt(this.CELL_SIZE) + rowGap),
		);

		return { columnCount, rowCount };
	}

	generateGrid() {
		this.grid = Array.from({ length: this.boardSize.rowCount }, (_, row) =>
			Array.from(
				{ length: this.boardSize.columnCount },
				(_, col) => new this.Cell({ row, col }),
			),
		);

		return this.grid;
	}

	// Expose controlled access to modify Cells
	setIsMine(row, col, value) {
		this.grid[row][col].setIsMine(value);
	}

	setIsRevealed(row, col, value) {
		this.grid[row][col].setIsRevealed(value);
	}

	setIsFlagged(row, col, value) {
		this.grid[row][col].setIsFlagged(value);
	}

	setAdjacentMineCount(row, col, value) {
		this.grid[row][col].setAdjacentMineCount(value);
	}
}
