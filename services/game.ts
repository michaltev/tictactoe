import { Player } from "./player";

export default class Game {
    public status: string;
    public players: Array<Player>;
    public board: Array<Array<string>>;
    private _boardSize: number;

    constructor() {
        this.status = "No Current Game";
        this.players = new Array<Player>();
        this.board = this._initBoard();
        this._boardSize = 3;
    }

    _initBoard() {
		var matrix = [];

		for (let i = 0; i < this._boardSize; i++) {
			var row = [];

			for (let k = 0; k < this._boardSize; k++) {
				row.push("");
			}

			matrix.push(row);
		}

		return matrix;
	}

};