export class Board {
    private _matrix: Array<Array<string>>;
    private _size: number;
    

    constructor(size:number) {
        this._matrix = this._initBoard(size);
        this._size = size;
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
        for(let i = 0; i < this._size; i++){
            for(let j = 0; j < this._size; j++){
                if (this._matrix[i][j] === ""){
                    return false;
                }
            }
        }
        return true;
    }

    checkIfWon(symbol: string): boolean {
        const symbolSequence = this._createSequence(symbol);
        return this._checkHorizontalSequence(symbolSequence) ||
               this._checkVerticalSequence(symbolSequence) || 
               this._checkDiagonalSequence(symbolSequence);
    }

    _createSequence(symbol: string): string {
        var sequence = "";

        for(let i = 0; i < this._size; i++){
            sequence += symbol;
        }

        return sequence;
    }
    
	isCellFree(x: number, y: number): boolean {
        return this._matrix[x][y] !== "X" &&
               this._matrix[x][y] !== "O";
    }
    
	isCellValid(x: number, y: number): boolean {
        return x >= 0 && x < this._size &&
               y >= 0 && y < this._size;
    }
    
    placeSymbol(symbol: string, x: number, y: number) {
        this._matrix[x][y] = symbol;
    }

    _checkDiagonalSequence(symbolSequence: string): boolean {
        var diagSequences = ['', ''];

        for (let i = 0; i < this._size; i++) {
            diagSequences[0] += this._matrix[i][i];
            diagSequences[1] += this._matrix[i][this._size - 1 - i];
        }

        return diagSequences.includes(symbolSequence);
    }

    _checkVerticalSequence(symbolSequence: string): boolean {
        var colSequences = ['', '', ''];

        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                colSequences[j] += this._matrix[i][j];
            }
        }

        return colSequences.includes(symbolSequence);
    }
    
    _checkHorizontalSequence(symbolSequence: string): boolean {
        for (let i = 0; i < this._size; i++) {
			const rowSequence = this._matrix[i].join('');

			if (rowSequence === symbolSequence) {
				return true;
            }
        }

        return false;
    }
};