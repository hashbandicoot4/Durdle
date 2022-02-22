import { useEffect, useState } from 'react';
import ValidWords from './valid-words.json';
import Answers from './answers.json';




function replaceat(str, index, newchar) {
    return str.substring(0, index) + newchar + str.substring(index + 1);
}


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



function comparewords(input, target) {
    console.log(input);
    console.log(target);
    let wordscore = [0, 0, 0, 0, 0];
    let temp = [];
    for (let i = 0; i < 5; i++) {
        if (input[i] == target[i]) {
            target = replaceat(target, i, '*');
            wordscore[i] = 2;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (wordscore[i] == 0) {
            if (target.includes(input[i])) {
                target = replaceat(target, target.indexOf(input[i]), '*');
                wordscore[i] = 1;
            }
        }
    }
    return wordscore;
}

function checkvalid(word, validWords) {
    // console.log('hello', word, word in validWords, validWords[0]);
    // let isIn = validWords.findIndex(w => w == word);
    // console.log(isIn);
    // return isIn > -1;
    return validWords.includes(word);
}

export const useLogic = () => {
    const [guesses, setGuesses] = useState([]);
    const [scores, setScores] = useState([]);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);

    // Logic to get todays words and valid words goes here
    // for now just using placeholder state variables
    const [dayWords, setDayWords] = useState([]);
    const [validWords, setValidWords] = useState([]);

    useEffect(() => {
        Answers[dayno].unshift("")
        setValidWords(ValidWords);     
        setDayWords(Answers[dayno]);
    }, []);

    const handleGuess = guess => {
        console.log('this runs');
        if (win == false && lose == false) {
            console.log('this runs  2');
            if (checkvalid(guess, validWords) === false) {
                console.log('shouldnt run', validWords[0]);
                return 'invalid';
            }
            let tempGuesses = [...guesses, guess];
            setGuesses(tempGuesses);
            if (dayWords.includes(guess)) {
                setWin(true);
                setScores([...scores, [2, 2, 2, 2, 2]]);
                return 'win';
            }
            let newScores = [];
            console.log(tempGuesses);
            for (let g of tempGuesses) {
                console.log('sc', g);
                let wordscore = comparewords(g, dayWords[1]);
                console.log(wordscore);
                newScores.push(wordscore);
            }
            console.log(newScores);
            setScores(newScores);
            let temp = [...dayWords];
            temp.shift();
            setDayWords([...temp]);
            if (temp.length == 1) {
                setLose(true);
                return 'lose';
            }
            return 'continue';
        }
    };

    return {
        guesses,
        setGuesses,
        scores,
        setScores,
        win,
        setWin,
        lose,
        setLose,
        handleGuess,
    };
};
