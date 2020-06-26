export class Board {
    private matrix: Array<Array<string>>;

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

    checkBoard() {
		// TODO
    }
    
	isCellFree(x: any, y: any): boolean {
        return this.matrix[x][y] !== "X" &&
               this.matrix[x][y] !== "O";
    }
    
	isCellValid(x: any, y: any): boolean {
        return x >= 0 && x < this.matrix.length &&
               y >= 0 && y < this.matrix[0].length;
    }
    
    placeSymbol(symbol: string, x: number, y: number) {
        this.matrix[x][y] = symbol;
    }
};