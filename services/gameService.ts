import { Request, Response } from "express";
import Game from './game';

var _game = new Game();

const getGameStatus = (req: Request, res: Response) => 
{
	res.json(_game.status);
};

const createGame = (req: Request, res: Response) => 
{
	res.json("create a game");
};

const joinGame = (req: Request, res: Response) => 
{
	res.json("join a game");
};

const makeMove = (req: Request, res: Response) => 
{
	res.json("make a move");
};

module.exports = 
{
	getGameStatus: getGameStatus,
	createGame: createGame,
	joinGame: joinGame,
	makeMove: makeMove
}