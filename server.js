const express = require('express');
const gameController = require('./controllers/gameController');

var app = express();
app.use(express.json());
const port = 3000;

app.get('/game/status', (req, res) => { gameController.getGameStatus(req, res) })

app.post('/game/create', (req, res) => { gameController.createGame(req, res) })

app.post('/game/join', (req, res) => { gameController.joinGame(req, res) })

app.post('/game/move', (req, res) => { gameController.makeMove(req, res) })

app.listen(port, () => 
{
	console.log('app is running on port '+port);
});