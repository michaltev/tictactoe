import { Request, Response } from "express";
import { gameService } from "../services/gameService";
import express from 'express';

var app = express();
app.use(express.json());
const port = 3000; 

const svGame = new gameService();

app.get('/game/status', (req : Request, res: Response) => { 
    const status = svGame.getGameStatus();
    res.json(status); 
})

app.post('/game/create', (req : Request, res: Response) => { 
    svGame.addPlayerToGame(req, res);
})

app.post('/game/join', (req : Request, res: Response) => { 
    svGame.addPlayerToGame(req, res);
})

app.post('/game/move', (req : Request, res: Response) => { 
    svGame.makeMove(req, res);
})

app.listen(port, () => {
	console.log('app is running on port ' + port);
});