import { Player } from "./player";
import { Statuses } from "./status";

export default class Game {
    public status: string;
    public players: Array<Player>;
    public board: Array<Array<string>>;
    public currPlayer: Player;
    private _boardSize: number;

    constructor() {
        this.status = Statuses.INITIAL;
        this.players = new Array<Player>();
        this.currPlayer = new Player("", "");
        this.board = this._initBoard();
        this._boardSize = 3;
    }

    initGame(userID: string){
        this.status = Statuses.WAITING;
        this.board = this._initBoard();
        this.currPlayer = new Player(userID, "X");
        this.players = [this.currPlayer];
    }

    startPlaying(userID: string){
        this.status = Statuses.PLAYING;
        var secondPlayer = new Player(userID, "O");
        this.players.push(secondPlayer);
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