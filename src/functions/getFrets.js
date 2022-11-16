import { CHROMATIC_SCALE } from "../musicTheory";

function getFrets(note) {
    let frets = [];
    let totalFrets = 24;
    let noteIndex = CHROMATIC_SCALE.indexOf(note.toUpperCase()) + 1
    let scaleLength = 51.5;
    let fretNumber = 0
    let activeNote = false
    for (let i = 0; i < totalFrets; i++) {
        let fretWidth = scaleLength / 17.82;
        let fretNote = CHROMATIC_SCALE[noteIndex];
        if (fretNote === undefined) {
            fretNote = "C"
            noteIndex = 0
        }
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