import { Player } from "./player";
import { Statuses } from "./status";
import { Board } from "./board";

export default class Game {
    public status: string;
    public players: Array<Player>;
    public board: Board;
    public lastPlayerMoved: Player;
    private _boardSize: number = 3;

    constructor() {
        this.status = Statuses.INITIAL;
        this.players = new Array<Player>();
        this.lastPlayerMoved = new Player("", "");
        this.board = new Board(this._boardSize);
    }

    initGame(user: string){
        this.status = Statuses.WAITING;
        this.board = new Board(this._boardSize);
        this.lastPlayerMoved = new Player(user, "X");
        this.players = [this.lastPlayerMoved];
    }

    startPlaying(user: string){
        this.status = Statuses.PLAYING;
        var secondPlayer = new Player(user, "O");
        this.players.push(secondPlayer);
    }

    isUsersTurn(user: string) {
        return this.lastPlayerMoved.id != user;
    }
    
    playMove(user: string, x: number, y: number) {
        this.lastPlayerMoved = this.players.filter(player => player.id === user)[0];
        this.board.placeSymbol(this.lastPlayerMoved.symbol, x, y);

        if(this.board.checkIfWon(this.lastPlayerMoved.symbol)){
            if(this.lastPlayerMoved.symbol === "X"){
                this.status = Statuses.X_WON;
            }
            else{
                this.status = Statuses.O_WON;
            }
        }
        else if(this.board.checkIfTie()){
            this.status = Statuses.TIE;
        }
        else{
            this.status = Statuses.PLAYING;
        }
	}

};