import { Player } from "./player";
import { Statuses } from "./status";
import { Board } from "./board";

export default class Game {
    public status: string;
    public players: Array<Player>;
    public board: Board;
    public currPlayer: Player;
    private _boardSize: number = 3;

    constructor() {
        this.status = Statuses.INITIAL;
        this.players = new Array<Player>();
        this.currPlayer = new Player("", "");
        this.board = new Board(this._boardSize);
    }

    initGame(userID: string){
        this.status = Statuses.WAITING;
        this.board = new Board(this._boardSize);
        this.currPlayer = new Player(userID, "X");
        this.players = [this.currPlayer];
    }

    startPlaying(userID: string){
        this.status = Statuses.PLAYING;
        var secondPlayer = new Player(userID, "O");
        this.players.push(secondPlayer);
    }

};