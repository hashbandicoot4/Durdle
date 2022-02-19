let VALID_WORDS = [];
let DAY_WORDS = [];

function comparewords(input, target) {
    let wordscore = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
        if (input[i] in target) {
            if (input[i] == target[i]) {
                let temp = target.split('');
                temp[i] = '*';
                target = ''.concat(temp);
                wordscore[i] = 2;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        if (wordscore[i] == 0) {
            if (input[i] in target) {
                let temp = list(target);
                temp[target.indexof(input[i])] = '*';
                target = ''.concat(temp);
                wordscore[i] = 1;
            }
        }
    }
    return wordscore;
}

function checkvalid(word) {
    return word in VALID_WORDS;
}

function getinput() {
    return;
}

function wingame() {
    return;
}

function losegame() {
    return;
}

function main() {
    let cur_guess = '';
    let remaining_words = ['', ...DAY_WORDS];
    let userscore = [];
    //HANDLE GETTING CUR GUESS
    if (checkvalid(cur_guess) == false) {
        print('INVALID GUESS');
        //HANDLE THIS
    }

    for (let i = 0; i < 6; i++) {
        cur_guess = getinput();
        let wordscore = comparewords(cur_guess, remaining_words[0]);
        if (cur_guess in remaining_words) {
            wingame();
        }
        userscore.append(wordscore);
        remaining_words.shift();
    }
}

main();
