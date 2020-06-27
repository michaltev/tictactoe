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

    checkIfBoardFull(): boolean {
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0;j<this.matrix[0].length; j++){
                if (this.matrix[i][j] === ""){
                    return false;
                }
            }
        }
        return true;
    }

    checkIfWon(symbol: string): boolean {
        return false;
    }
    
	isCellFree(x: number, y: number): boolean {
        return this.matrix[x][y] !== "X" &&
               this.matrix[x][y] !== "O";
    }
    
	isCellValid(x: number, y: number): boolean {
        return x >= 0 && x < this.matrix.length &&
               y >= 0 && y < this.matrix[0].length;
    }
    
    placeSymbol(symbol: string, x: number, y: number) {
        this.matrix[x][y] = symbol;
    }
};