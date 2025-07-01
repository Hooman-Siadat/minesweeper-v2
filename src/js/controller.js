import {
	Renderer,
	MineSweeper,
	Game,
	ids,
	classNames,
	EventManager,
	DOMEventStrategy,
	mainMenuHandler,
	$,
	getElementLayoutMetrics,
	MINE_RATIO_BY_DIFFICULTY,
	CELL_SIZE,
	Cell,
	GridGenerator,
	Timer,
} from "./index.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
	// render main menu
	const renderer = new Renderer($(ids.app), classNames);
	renderer.renderTemplate(ids.templates.mainMenu);

	// bind main menu event listener
	const mainMenuEvent = new DOMEventStrategy(
		"submit",
		(e) => {
			mainMenuHandler(e, $(ids.nickname), $(ids.gameMode), onSuccess);
		},
		$(ids.menu),
	);
	const mainMenuListener = new EventManager([mainMenuEvent]);

	// initiate
	function onSuccess(nickname, gameMode) {
		renderer.clearApp();
		renderer.renderTemplate(ids.templates.board);
		renderer.boardElement = $(ids.board);

		const boardLayoutMetrics = getElementLayoutMetrics($(ids.board));
		const minesweeper = new MineSweeper();
		const gridGenerator = new GridGenerator(
			Cell,
			DOMEventStrategy,
			EventManager,
			boardLayoutMetrics,
			CELL_SIZE,
		);
		const timer = new Timer((secondsElapsed) => {
			renderer.renderTime(secondsElapsed, $(ids.timerDisplay));
		});
		const gameInstance = new Game(
			renderer,
			minesweeper,
			gridGenerator,
			timer,
			MINE_RATIO_BY_DIFFICULTY,
			nickname,
			$(ids.nicknameDisplay),
			gameMode,
		);

		gameInstance.start();
	}
}
