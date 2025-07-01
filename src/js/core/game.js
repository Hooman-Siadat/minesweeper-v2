export class Game {
	constructor(
		renderer,
		minesweeper,
		gridGenerator,
		timer,
		MINE_RATIO_BY_DIFFICULTY,
		nickname,
		nicknameDisplayElement,
		timerDisplay,
		gameMode,
	) {
		// dependencies
		this.renderer = renderer;
		this.minesweeper = minesweeper;
		this.gridGenerator = gridGenerator;
		this.timer = timer;

		// user data
		this.nickname = nickname;
		this.gameMode = gameMode;

		// elements
		this.nicknameDisplayElement = nicknameDisplayElement;
		this.timerDisplay = timerDisplay;

		// game config
		this.mineRatio = MINE_RATIO_BY_DIFFICULTY[this.gameMode];
		this.totalMines = 0;

		// grid
		this.grid = {};
	}
	start() {
		console.log("game started");
		// generate cells
		this.grid = this.gridGenerator.generateGrid();

		// adjust board layout
		this.renderer.adjustBoard(this.gridGenerator.boardSize);

		// render cells
		this.renderer.renderGrid(this.grid);

		// render nickname
		this.renderer.renderNickname(this.nickname, this.nicknameDisplayElement);

		// start timer
		this.timer.start();

		//TODO bind board events
	}

	end() {
		console.log("game finished");
	}
}
