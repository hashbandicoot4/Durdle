const express = require('express');

const app = express();

app.use(express.static('Client'));
app.use(express.json());

app.listen(8080);

