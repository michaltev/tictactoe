import { Request, Response } from "express";
import Game from './game';
import { Statuses } from "./status";

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
		return res.status(400).json("send a valid user")
	}

	
};

const makeMove = (req: Request) => {
	return ("make a move");
};

module.exports = {
	getGameStatus: getGameStatus,
	createGame: createGame,
	makeMove: makeMove
}