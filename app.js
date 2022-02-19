const express = require("express");

const app = express();
// Interact with file system
const fs = require('fs')

app.use(express.static("Client"));
app.use(express.json());

// Load text file
const durdle = fs.readFileSync("durdle-allowed-guesses.txt", function(err,data) {
    if(err) throw err;
    obj = JSON.parse(data);
});

console.log(durdle);

// Constant random seed per day

const wordSet = ["jeans", "pipes", "ultra", "disco", "unity"];
daily_wordSet = JSON.stringify(wordSet);

console.log(daily_wordSet);

// Get all valid words
app.get("/validWords", function(req, res) {
    res.json(durdle)
});

// Get 5 guess words set
app.get("/wordSet", function(req, res) {
    res.json(wordSet)
});

app.listen(8080);