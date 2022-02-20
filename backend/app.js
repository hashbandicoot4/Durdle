import express from 'express';

const app = express();
// Interact with file system
import fs from 'fs';

app.use(express.static('Client'));
app.use(express.json());

// Load text file
const ValidWords = JSON.parse(fs.readFileSync('./valid-words.json'));
const Answers = JSON.parse(fs.readFileSync('./answers.json'))

// const durdle = fs.readFileSync('valid-words.json', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     console.log(obj);
//     return obj;
// });

// console.log(durdle);
console.log(ValidWords);

// Constant random seed per day
var wordSet = ['jeans', 'pipes', 'ultra', 'disco', 'unity', 'boxes'];
var dailyWordSet = JSON.stringify(wordSet);


function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

let dayno = datediff(parseDate("02/20/2022"), parseDate(today));

console.log(dayno)

// Get all valid words
app.get('/validWords', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000' || 'https://durdle.tech');
    res.json(ValidWords);
});

// Get 5 guess words set
app.get('/dailyWordSet', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000' || 'https://durdle.tech');
    res.json(Answers[dayno]);
});

app.listen(8080);
