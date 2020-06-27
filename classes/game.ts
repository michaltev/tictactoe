import { Player } from "./player";
import { Statuses } from "./status";
import { Board } from "./board";

export default class Game {
    public status: string;
    public players: Array<Player>;
    public board: Board;
    public lastPlayerMoved: Player;

    constructor() {
        this.status = Statuses.INITIAL;
        this.players = new Array<Player>();
        this.lastPlayerMoved = new Player("", "");
        this.board = new Board();
    }

    initGame(user: string){
        this.status = Statuses.WAITING_FOR_SECOND_PLAYER;
        this.board = new Board();
        this.lastPlayerMoved = new Player(user, "X");
        this.players = [this.lastPlayerMoved];
    }

    startPlaying(user: string){
        this.status = Statuses.PLAYING;
        this.lastPlayerMoved = new Player(user, "O");
        this.players.push(this.lastPlayerMoved);
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
        else if(this.board.checkIfBoardFull()){
            this.status = Statuses.TIE;
        }
        else{
            this.status = Statuses.PLAYING;
        }
	}

};