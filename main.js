const cipherButton = document.getElementById("cipher");
const decipherButton = document.getElementById("decipher");
const keyInput = document.getElementById("keyInput");
var inputText = document.getElementById("messageInput");
var decipheredText = document.getElementById("result");

// alphabet array
const alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ",", "?", "!", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "$", "%", "&", "(", ")", "/"];

// key in numerical value
var key = 0;

// new alphabet array
var newAlphabet = [];

var text = "";
var cipherText = "";
var deCipherText = "";

keyInput.focus();

// updating key with user value
const keyChange = () => {
    key = parseInt(keyInput.value);
}

// function to create new alphabet taking the key as a shift value
const createNewAlphabet = () => {
    for (i in alphabet) {
        if ((parseInt(i) + key) >= alphabet.length) {
            numOver = (parseInt(i) + key) - alphabet.length;
            while (numOver >= alphabet.length) {
                numOver -= alphabet.length;
            }
            newAlphabet.push(alphabet[numOver]);
        } else {
            newAlphabet.push(alphabet[parseInt(i) + key]);
        }
    }
}

// function to cipher the code
const cipher = () => {
    keyChange();
    createNewAlphabet();
    text = inputText.value;
    text = text.toLowerCase();
    for (i in text) {
        cipherText = cipherText + newAlphabet[alphabet.indexOf(text[i])];
    }
    decipheredText.innerHTML = cipherText;
    decipheredText.style.display = "block";
    cipherText = "";
    inputText.value = "";
}

// decipher function
const decipher = () => {
    keyChange();
    createNewAlphabet();
    cipherText = inputText.value;
    cipherText = cipherText.toLowerCase();
    for (i in cipherText) {
        deCipherText = deCipherText + alphabet[newAlphabet.indexOf(cipherText[i])];
    }
    decipheredText.innerHTML = deCipherText;
    decipheredText.style.display = "block";
    deCipherText = "";
    inputText.value = "";
}

cipherButton.onmouseup = cipher;
decipherButton.onmouseup = decipher;