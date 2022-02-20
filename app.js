import express from 'express';

const app = express();
// Interact with file system
import fs from 'fs';

app.use(express.static('Client'));
app.use(express.json());

// Load text file
const ValidWords = JSON.parse(fs.readFileSync('./valid-words.json'));

// const durdle = fs.readFileSync('valid-words.json', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     console.log(obj);
//     return obj;
// });

// console.log(durdle);
console.log(ValidWords);

// Constant random seed per day
var wordSet = ['jeans', 'pipes', 'ultra', 'disco', 'unity'];
var dailyWordSet = JSON.stringify(wordSet);

// Get all valid words
app.get('/validWords', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(ValidWords);
});

// Get 5 guess words set
app.get('/dailyWordSet', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(wordSet);
});

app.listen(8080);
