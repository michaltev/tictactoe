const getGameStatus = (req, res) => 
{
	res.json("status!");
};

const createGame = (req, res) => 
{
	res.json("create a game");
};

const joinGame = (req, res) => 
{
	res.json("join a game");
};

const makeMove = (req, res) => 
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