const express = require('express');

var app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => 
{
	console.log('app is running on port '+port);
});