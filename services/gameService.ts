import { Request, Response } from "express";
import Game from './game';
import { Statuses } from "./status";

var _game = new Game();

const getGameStatus = () => {
	return (_game.status);
};

const createGame = (req: Request) => {
	const {user} = req.body;

	if(_game.status === Statuses.PLAYING){
		return _game.status;
	}
	else if(_game.status === Statuses.WAITING){
		_game.startPlaying(user);
	}
	else{
		_game.initGame(user);
	}

	return _game.status;
};

const makeMove = (req: Request) => {
	return ("make a move");
};

module.exports = {
	getGameStatus: getGameStatus,
	createGame: createGame,
	makeMove: makeMove
}