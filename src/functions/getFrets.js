import { CHROMATIC_SCALE } from "../musicTheory";

function getFrets(note) {
    let frets = [];
    let totalFrets = 21;
    let noteIndex = CHROMATIC_SCALE.indexOf(note) + 1
    let scaleLength = 51.5;
    let fretNumber = 0
    let activeNote = false
    for (let i = 0; i < totalFrets; i++) {
        let fretWidth = scaleLength / 17.82;
        let fretNote = CHROMATIC_SCALE[noteIndex];
        noteIndex++;
        if (noteIndex > 11) {
            noteIndex = 0;
        }

        fretNumber++;
        frets.push({ fretWidth, fretNote, fretNumber, activeNote });
        scaleLength -= fretWidth;
    }

    return frets;

}

export default getFrets;