
// get 21 fret , each fret has width according to rule of 18
// example
// Fret 1 (F1) = 51.5 (SL)/17.82 = 2.9cm

// Fret 2 (F2) = 51.5 (SL) – 2.9 (F1) / 17.82 = 2.7cm

// Fret 3 (F3) = 51.5 (SL) – [ 2.9(F1) + 2.7(F2) ] / 17.82 = 2.6 

// Fret 4 (F4) = 51.5 (SL) – [ 2.9(F1) + 2.7(F2) + 2.6(F3) ] / 17.82 = 2.5


function distributeFretsWidth() {
    let frets = [];
    let totalFrets = 21;
    let scaleLength = 51.5;


    for (let i = 0; i < totalFrets; i++) {
        let fretWidth = scaleLength / 17.82;
        frets.push(fretWidth);
        scaleLength -= fretWidth;
    }
    return frets;

}

console.log(distributeFretsWidth());
console.log(distributeFretsWidth().length);


const letter = "A";
// transform letter to next letter in alphabet
const nextLetter = (letter) => {
    return String.fromCharCode(letter.charCodeAt(0) + 1);

}
console.log(nextLetter(letter));

const arr = ["A", "B", "C"];

// if letter is already in array, return next letter
const chooseAccidental = (arr, letter) => {

    if (arr.includes(letter)) {
        return nextLetter(letter) + "♭";
    }

    return letter + "#";

}

console.log(chooseAccidental(arr, ""));
