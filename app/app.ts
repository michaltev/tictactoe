import { Request, Response } from "express";

const express = require('express');
const gameService = require('../services/gameService');

var app = express();
app.use(express.json());
const port = 3000; 

app.get('/game/status', (req : Request, res: Response) => { 
    const status = gameService.getGameStatus();
    res.json(status); 
})

app.post('/game/create', (req : Request, res: Response) => { 
    gameService.createGame(req, res);
})

app.post('/game/join', (req : Request, res: Response) => { 
    gameService.createGame(req, res); 
})

app.post('/game/move', (req : Request, res: Response) => { 
    res.json(gameService.makeMove(req)); 
})

app.listen(port, () => {
	console.log('app is running on port '+port);
});