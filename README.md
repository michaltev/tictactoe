# TicTacToe Server API

## API 

|               | Functions                                                          | Requset  | URL                                      |
| ------------- | ------------------------------------------------------------------ | -------- | ---------------------------------------- |
| :green_heart: | Get current game status                                            | Get      | localhost:3000/game/status               |
| :green_heart: | Create a game (Request Body example: {"user":"dana"})              | Post     | localhost:3000/game/create               |
| :green_heart: | Join a game (Request Body example: {"user":"dana"})                | Post     | localhost:3000/game/join                 |
| :green_heart: | Make a Move (Request Body example: {"user":"dana", "x":2, "y":2})  | Post     | localhost:3000/game/move                 |

## Description
This is a TicTacToe server!
* A user can create a new game, or join a game where the second player is missing. 
* The creator of the game is the fist to play :)
* The board size is 3.

## Quick Start
Don't forget to
```
npm install
```

To run the server side in dev mode on port 3000:
```
npm run dev
```

To run the server side in prod mode (and compile the ts files to js files) on port 3000:
```
npm run prod
```

Have fun :green_heart:
