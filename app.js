const express = require("express");
const { response } = require("app.js");

const app = express();
// Interact with file system
const fs = require('fs')

app.use(express.static('Client'));
app.use(express.json());

// Load text file
const durdle = fs.readFileSync("durdle-allowed-guesses.txt", 
    {encoding: "utf-8", flag: "r"});

// Constant random seed per day

const wordSet = ["jeans", "pipes", "ultra", "disco", "unity"];

// Get 5 words set
app.get("/words", function(req, res) {
    res.json(wordSet)
});

app.listen(8080);