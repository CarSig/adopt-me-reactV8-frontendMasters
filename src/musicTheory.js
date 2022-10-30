
export const CHROMATIC_SCALE = ['C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭', 'A', 'A#/B♭', 'B'];

const SCALE_INTERVALS = {
    major: [2, 2, 1, 2, 2, 2, 1],
    minor: [2, 1, 2, 2, 1, 2, 2],
    harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
    melodicMinor: [2, 1, 2, 2, 2, 2, 1],
    diminished: [2, 1, 2, 1, 2, 1, 2, 1],
    augmented: [3, 1, 3, 1, 3, 1],
    majorPentatonic: [2, 2, 3, 2, 3],
    minorPentatonic: [3, 2, 2, 3, 2],
    blues: [3, 2, 1, 1, 3, 2],
    wholeTone: [2, 2, 2, 2, 2, 2],
    chromatic: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

}


function getScale(root, scale) {
    const isScaleValid = CHROMATIC_SCALE.includes(root.toUpperCase()) || CHROMATIC_SCALE.includes(root.slice(0, 2).toUpperCase()) || CHROMATIC_SCALE.includes(root.slice(3, 5).toUpperCase());

    if (!isScaleValid) {

        return 'Invalid root note';
    }
    let currentNote = root.toUpperCase();

    const scaleIntervals = SCALE_INTERVALS[scale];
    const scaleNotes = [];
    const iterateNotes = (note, interval) => CHROMATIC_SCALE[(CHROMATIC_SCALE.indexOf(note) + interval) % CHROMATIC_SCALE.length];
    scaleIntervals.forEach(interval => {
        // if note of same letter is already in scale, change to accidental
        const sharp = currentNote.slice(0, 2)
        const flat = currentNote.slice(3, 5)
        const accidental = !scaleNotes.includes(currentNote.slice(0, 1)) ? sharp : flat

        // fix for minor scales
        if (scaleNotes.includes(`${sharp.slice(0, 1)}♭`)) {
            if (currentNote.length > 1) {
                scaleNotes.push(`${currentNote.slice(3, 4)}`)
            } else {
                scaleNotes.push(`${currentNote}`)
            }
        } else {
            currentNote.length > 1 ? scaleNotes.push(accidental) : scaleNotes.push(currentNote);
        }
        currentNote = iterateNotes(currentNote, interval);
    });
    return scaleNotes;

}

// console.log(getScale('C', 'minor'));
// console.log(getScale('D', 'minor'));
// console.log(getScale('E', 'minor'));
// console.log(getScale('F', 'minor'));
// console.log(getScale('G', 'minor'));
// console.log(getScale('A', 'minor'));
// console.log(getScale('B', 'minor'));

// console.log(getScale('C', 'major'));
// console.log(getScale('D', 'major'));



const getChord = {
    major: (root) => {
        const majorScale = getScale(root, 'major');
        return [majorScale[0], majorScale[2], majorScale[4]];
    },
    minor: (root) => {
        const minorScale = getScale(root, 'minor');
        return [minorScale[0], minorScale[2], minorScale[4]];
    },
    diminished: (root) => {
        const diminishedScale = getScale(root, 'diminished');
        return [diminishedScale[0], diminishedScale[2], diminishedScale[4]];
    },
    augmented: (root) => {
        const augmentedScale = getScale(root, 'augmented');
        return [augmentedScale[0], augmentedScale[2], augmentedScale[4]];
    },
    major7: (root) => {
        const majorScale = getScale(root, 'major');
        return [majorScale[0], majorScale[2], majorScale[4], majorScale[6]];
    },
    minor7: (root) => {
        const minorScale = getScale(root, 'minor');
        return [minorScale[0], minorScale[2], minorScale[4], minorScale[6]];
    },
    dominant7: (root) => {
        const majorScale = getScale(root, 'major');
        return [majorScale[0], majorScale[2], majorScale[4], majorScale[6]];
    },
    diminished7: (root) => {
        const diminishedScale = getScale(root, 'diminished');
        return [diminishedScale[0], diminishedScale[2], diminishedScale[4], diminishedScale[6]];
    },
    halfDiminished7: (root) => {
        const minorScale = getScale(root, 'minor');
        return [minorScale[0], minorScale[2], minorScale[4], minorScale[6]];
    },
    minorMajor7: (root) => {
        const minorScale = getScale(root, 'minor');
        return [minorScale[0], minorScale[2], minorScale[4], minorScale[6]];
    },


}


// console.log(getChord.major('C#'));
// console.log(getChord.minor('C'));
// console.log(getChord.diminished('C'));
// console.log(getChord.augmented('C'));
// console.log(getChord.major7('C'));
// console.log(getChord.minor7('C'));
// console.log(getChord.dominant7('C'));
// console.log(getChord.diminished7('C'));
// console.log(getChord.halfDiminished7('C'));
// console.log(getChord.minorMajor7('C'));







