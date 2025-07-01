export class Renderer {
	constructor(appElement, classNames) {
		this.appElement = appElement;
		this.boardElement = null;

		this.classNames = classNames;
	}

	renderTemplate(templateId) {
		const template = document.querySelector(templateId);
		const target = this.appElement;

		if (template && target) {
			const clone = template.content.cloneNode(true);
			this.clearApp();
			target.appendChild(clone);
		}
	}

	clearApp() {
		this.appElement.innerHTML = "";
	}

	// adjust board layout
	adjustBoard({ columnCount, rowCount }) {
		this.boardElement.style.gridTemplateColumns = `repeat(${columnCount}, auto)`;
		this.boardElement.style.gridTemplateRows = `repeat(${rowCount}, auto)`;
	}

	// assign fixed values so dimensions remain the same when resized
	fixBoardDimensions() {}

	renderGrid(grid) {
		const cells = document.createDocumentFragment();

		grid.forEach((rows, row) => {
			rows.forEach((_, col) => {
				const cellElement = document.createElement("div");
				cellElement.dataset.row = row;
				cellElement.dataset.col = col;
				cellElement.classList.add(this.classNames.cell);
				cells.appendChild(cellElement);
			});
		});

		this.boardElement.appendChild(cells);
	}

	renderTime(seconds, timerElement) {
		const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
		const secs = String(seconds % 60).padStart(2, "0");
		timerElement.textContent = `${mins}:${secs}`;
	}

	renderNickname(nickname, displayElement) {
		displayElement.textContent = nickname;
	}
}
