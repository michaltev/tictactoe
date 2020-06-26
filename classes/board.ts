export class Board {
    public matrix: Array<Array<string>>;

    constructor(size:number) {
        this.matrix = this._initBoard(size);
    }

    _initBoard(boardSize: number) {
		var matrix = [];

		for (let i = 0; i < boardSize; i++) {
			var row = [];

			for (let k = 0; k < boardSize; k++) {
				row.push("");
			}

			matrix.push(row);
		}

		return matrix;
	}
};