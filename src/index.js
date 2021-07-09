const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    let words = expr.split("**********");
    let temp = [];
    let word = "";
    let res = "";
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j <= words[i].length; j += 10) {
            temp.push(words[i].slice(j, j + 10));
        }
    }
    temp.map((item) => {
        for (let k = 0; k < item.length; k += 2) {
            if (item.slice(k, k + 2) == 10) {
                word += ".";
            } else if (item.slice(k, k + 2) == 11) {
                word += "-";
            }
        }
        console.log(word);
        if (word !== "") res += MORSE_TABLE[word];
        else res += " ";
        word = "";
    });
    return res.slice(0, -1);
}

module.exports = {
    decode,
};
