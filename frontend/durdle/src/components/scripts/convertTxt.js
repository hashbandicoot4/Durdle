const fs = require('fs');

try {
    const data = fs.readFileSync('input4.txt', 'utf8');
    const list = data.split('\r\n');
    const json = JSON.stringify(list);
    fs.writeFileSync('valid-words.json', json, 'utf-8');
} catch (err) {
    console.error(err);
}
