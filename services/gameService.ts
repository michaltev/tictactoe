import { Request, Response } from "express";
import Game from '../classes/game';
import { Statuses } from "../classes/status";
import { Errors } from '../classes/error';

var _game = new Game();

const getGameStatus = () => {
	return (_game.status);
};

const createGame = (req: Request, res: Response) => {
	const {user} = req.body;

	if(user){
		if(_game.status === Statuses.PLAYING){
			return res.status(400).json(_game.status)
		}
		else if(_game.status === Statuses.WAITING){
			if(user != _game.players[0].id){
				_game.startPlaying(user);
			}
			else{
				return res.status(400).json(_game.status)
			}
			
		}
		else{
			_game.initGame(user);
		}
	
		return res.json(_game.status);
	}
	else{
		return res.status(400).json(Errors.NOT_VALID_USER)
	}

	
};

const makeMove = (req: Request, res: Response) => {
	const {user, x, y} = req.body;

	if(_game.isUsersTurn(user) && _game.status === Statuses.PLAYING){
		if(_game.board.isCellValid(x,y) && _game.board.isCellFree(x,y)){
			_game.playMove(user, x, y);
			return res.json(_game.status);
		}
		else{
			return res.status(400).json(Errors.NOT_VALID_CELL);
		}
	}
	else{
		return res.status(400).json(Errors.NOT_THE_TURN);
	}
};

module.exports = {
	getGameStatus: getGameStatus,
	createGame: createGame,
	makeMove: makeMove
}