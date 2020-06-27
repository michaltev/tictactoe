import { Request, Response } from "express";
import Game from "../classes/game";
import { Statuses } from "../classes/status";
import { Errors } from "../classes/error";

export class gameService {
	private _game: Game;
	
	constructor(){
		this._game = new Game();
	} 

	getGameStatus(): string{
		return (this._game.status);
    }
    
    addPlayerToGame(req: Request, res: Response){
        const {user} = req.body;
    
        if(user){
            if(this._game.status === Statuses.PLAYING){
                return res.status(400).json(this._game.status)
            }
            else if(this._game.status === Statuses.WAITING_FOR_SECOND_PLAYER){
                if(user != this._game.players[0].id){
                    this._game.startPlaying(user);
                }
                else{
                    return res.status(400).json(this._game.status)
                }
            }
            else{
                this._game.initGame(user);
            }
        
            return res.json(this._game.status);
        }
        else{
            return res.status(400).json(Errors.NOT_VALID_USER)
        }
    };

    makeMove(req: Request, res: Response){
        const {user, x, y} = req.body;
    
        if(this._game.isUsersTurn(user) && this._game.status === Statuses.PLAYING){
            if(this._game.board.isCellValid(x,y) && this._game.board.isCellFree(x,y)){
                this._game.playMove(user, x, y);
                return res.json(this._game.status);
            }
            else{
                return res.status(400).json(Errors.NOT_VALID_CELL);
            }
        }
        else{
            return res.status(400).json(Errors.NOT_THE_TURN);
        }
    };
}