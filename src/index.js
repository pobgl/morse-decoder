const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    
    let decoded = "";
    for (let i = 0; i < expr.length; i += 10) {
        let morse = expr.slice(i, i + 10);
        if (morse === "**********") {
            decoded += " ";
            continue;
        }
        let decodeChar = "";
        for (let n = 0; n < morse.length; n += 2) {
            let str = morse.slice(n, n + 2);

            if (str != "00") {
                decodeChar += str == "10" ? "." : "-";
            }
        }
        decoded += MORSE_TABLE[decodeChar];
    }
    return decoded;
}

module.exports = {
    decode
}