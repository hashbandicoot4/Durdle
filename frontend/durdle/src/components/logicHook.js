import { useEffect, useState } from 'react';
import validWordList from './valid-words.json';

function replaceat(str, index, newchar) {
    return str.substring(0, index) + newchar + str.substring(index + 1);
}

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
        setValidWords(validWordList);
        setDayWords(['', 'later', 'trees', 'unity', 'cloud', 'disco']);
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
            if (temp.length == 0) {
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
