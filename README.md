# TicTacToe Server API

## API 

| Functions                | Requset  | Request Body example            | URL                             |
| -------------------------| -------- | ------------------------------- | ------------------------------- |
| Get current game status  | Get      | -                               | localhost:3000/game/status      |
| Create a game            | Post     | {"user":"dana"}                 | localhost:3000/game/create      |
| Join a game              | Post     | {"user":"dana"}                 | localhost:3000/game/join        |
| Make a Move              | Post     | {"user":"dana", "x":2, "y":2}   | localhost:3000/game/move        |

## Description
This is a TicTacToe server!
* A user can create a new game, or join a game where the second player is missing. :green_heart:
* The creator of the game is the fist to play :) :green_heart:
* The board size is 3. :green_heart:

## Quick Start
Don't forget to...
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
