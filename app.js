const express = require("express");
const { response } = require('../../Durham/First_Year/COMP 1111 - Programming/Website Summative Assessment/app');

const app = express();
// Interact with file system
const fs = require('fs')

app.use(express.static('Client'));
app.use(express.json());

// Load text file
const durdle = fs.readFileSync("durdle-allowed-guesses.txt", 
    {encoding: "utf-8", flag: "r"});

console.log(durdle);

// Get 5 words and 
app.get("/words", function(req, res) {
    // Depending on the guess we are currently on
    res.json(wordSet)
});

app.listen(8080);