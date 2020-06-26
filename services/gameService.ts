import { Request, Response } from "express";
import Game from './game';

var _game = new Game();

const getGameStatus = (req: Request) => {
	return (_game.status);
};

const createGame = (req: Request) => {
	return ("create a game");
};

const joinGame = (req: Request) => {
	return ("join a game");
};

const makeMove = (req: Request) => {
	return ("make a move");
};

module.exports = {
	getGameStatus: getGameStatus,
	createGame: createGame,
	joinGame: joinGame,
	makeMove: makeMove
}