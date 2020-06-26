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
		_startGame(user);
	}
	else{
		_game.createNewGame(user);
	}

	return _game.status;
};

const joinGame = (req: Request) => {
	return ("join a game");
};

const makeMove = (req: Request) => {
	return ("make a move");
};

const _startGame = (userID: string) => {
	_game.startGame(userID);
}

module.exports = {
	getGameStatus: getGameStatus,
	createGame: createGame,
	joinGame: joinGame,
	makeMove: makeMove
}