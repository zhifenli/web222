// // Object to provide lookup of morse code (value) for a given letter (key).
var alpha = {
  // define the mapping here as a literal
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '': '/',
};
// // Object to provide lookup of letter (value) for a given morse code (key).
var morse = {A: ".-",
"-...": B,
"-.-.": C,
"-..": D,
".": E,
'..-.': F,
'--.': G,
'....': H,
'..': I,
'.---': J,
'-.-': K,
'.-..': L,
'--': M,
'-.': N,
'---': O,
'.--.': P,
'--.-': Q,
'.-.': R,
'...': S,
'-': T,
'..-': U,
'...-': V,
'.--': W,
'-..-': X,
'-.--': Y,
'--..': Z,
'/': ' '};

console.log(alpha['M']);
console.log(morse['--']);

//   exg /^[.\-]*/
// // Hint: use the [] operator to specify these special key values rather than a literal.

// // Return `true` if all characters are morse code.  Use a RegExp.
function isMorse(characters) {
    return /^[.\-]*$/.test(characters);
}
console.log(isMorse('-- --- .-. ... ./-.-. --- -.. .'))
// // Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
// // Bonus: can you rewrite it using `Object.keys()` and your `alpha` Object instead?
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function isAlpha(characters) {
    return /^[A-Z]*$/.test(characters);
}
console.log(isAlpha('MURARTH'));

// // Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// // Return undefined if text is not alpha.
function textToMorse(text) {
    text = text.toUpperCase();
    var words = text.split(' ');
    var morseWords = [];
    for(let i = 0; i < words.length; i++){
        let morseWord="";
        for(j = 0; j < words[i].length; j++){
            var letter = words[i].charAt(j);
            morseWord+=alpha[letter]+' ';
        }
        morseWord=morseword.trim();
        morseArray.push(morseWord);
    }
    return morseWord.join('/');
}


function morseToText(morse) {
    var words = text.split('/');
    var morseWords = [];
    for(let i = 0; i < words.length; i++){
        let morseWord="";
        for(j = 0; j < words[i].length; j++){
            var letter = words[i].charAt(j);
            morseWord+=alpha[letter]+' ';
        }
        morseWord=morseword.trim();
        morseArray.push(morseWord);
    }
    return morseWord.join('/');
}

// // Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// // Return undefined if morse is not proper code.
function morseToText(morse) {
    let words = morse.split('/');
    for (let i =0; i < words.length; i++){
        words[i] = words[i].split(' ');
        for (let j=0; j<words[i].length; j++){
            let word={};
            word+=morse[letter[j]]; 
        }

    }

}

// // Constructor function that takes a `message` (String), which can be either morse or alpha.
// // Use your functions above to decide how to store a value for `any` on `this`
// function Message(any) {

// }

// // Return the message as morse code, converting if necessary
// Message.prototype.toMorse = function() {

// };

// // Return the message as alpha characters, converting if necessary
// Message.prototype.toAlpha = function() {

// };

// var msg1 = new Message('--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-..');
// console.log(msg1.toAlpha());
// console.log(msg1.toMorse());

// var msg2 = new Message('I am learning how to use Objects in JavaScript');
// console.log(msg2.toMorse());
// console.log(msg2.toAlpha());
