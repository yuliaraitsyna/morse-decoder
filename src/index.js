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
    let str = ""

    for(let i = 0; i < expr.length; i+=10) {
        let binaryChunk = expr.slice(i, i + 10);

        if(binaryChunk === "**********") {
            str += " "
            continue;
        }

        let morse = "";
        for(let j = 0; j < 10; j+=2) {
            const binaryPair = binaryChunk.slice(j, j + 2);
            if(binaryPair === "10") {
                morse += "."
            }
            else if(binaryPair === "11") {
                morse += "-"
            }
        }

        str += MORSE_TABLE[morse];
    }

    return str;
    
}

module.exports = {
    decode
}