
export const CHROMATIC_SCALE = ['C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭', 'A', 'A#/B♭', 'B'];

export const SCALE_INTERVALS = {
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


export const isNoteAlreadyInScale = (note, prevNote) => {
    const result = note.slice(0, 1) !== prevNote.slice(0, 1)
    return result
}

export const formatNote = (note, prevNote) => {
    const prevNoteSame = isNoteAlreadyInScale(note, prevNote)
    const result = prevNoteSame ? note.slice(0, 2) : note.slice(3, 5)
    return result
}


export const getScale = (note, scaleType) => {
    const scale = [note.slice(0, 2)];
    let index = CHROMATIC_SCALE.indexOf(note);
    let prevNote = ""
    SCALE_INTERVALS[`${scaleType}`].forEach(interval => {
        index += interval;
        if (index > 11) {
            index -= 12;
        }
        const note = formatNote(CHROMATIC_SCALE[index], prevNote)
        // const note = CHROMATIC_SCALE[index].slice(0, 1) !== prevNote.slice(0, 1) ? (CHROMATIC_SCALE[index].slice(0, 2)) : CHROMATIC_SCALE[index].slice(3, 5);
        scale.push(note);
        prevNote = note
    });
    return scale;
}


export const getChord = (root, chord) => {
    const chordNotes = [root];
    let index = CHROMATIC_SCALE.indexOf(root);
    let prevNote = ""
    chord.forEach(interval => {
        index += interval;
        if (index > 11) {
            index -= 12;
        }


        const note = CHROMATIC_SCALE[index].slice(0, 1) !== prevNote.slice(0, 1) ? (CHROMATIC_SCALE[index].slice(0, 2)) : CHROMATIC_SCALE[index].slice(3, 5);
        chordNotes.push(note);
        prevNote = note
    })
}




console.log(getScale('A', 'major'));

export const Modes = {
    ionian: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10]
}

export const Triads = {
    major: [0, 4, 7],
    minor: [0, 3, 7],
    diminished: [0, 3, 6],
    augmented: [0, 4, 8]
}

export const SeventhChords = {
    major: [0, 4, 7, 11],
    minor: [0, 3, 7, 10],
    dominant: [0, 4, 7, 10],
    diminished: [0, 3, 6, 9],
    augmented: [0, 4, 8, 10]
}

// export const getScale = (root, scale) => {
//     const isScaleValid = CHROMATIC_SCALE.includes(root.toUpperCase()) || CHROMATIC_SCALE.includes(root.slice(0, 2).toUpperCase()) || CHROMATIC_SCALE.includes(root.slice(3, 5).toUpperCase());

//     if (!isScaleValid) {

//         return 'Invalid root note';
//     }
//     let currentNote = root.toUpperCase();

//     const scaleIntervals = SCALE_INTERVALS[scale];
//     const scaleNotes = [];
//     const iterateNotes = (note, interval) => CHROMATIC_SCALE[(CHROMATIC_SCALE.indexOf(note) + interval) % CHROMATIC_SCALE.length];
//     scaleIntervals.forEach(interval => {
//         // if note of same letter is already in scale, change to accidental
//         const sharp = currentNote.slice(0, 2)
//         const flat = currentNote.slice(3, 5)
//         const accidental = !scaleNotes.includes(currentNote.slice(0, 1)) ? sharp : flat

//         // fix for minor scales
//         if (scaleNotes.includes(`${sharp.slice(0, 1)}♭`)) {
//             if (currentNote.length > 1) {
//                 scaleNotes.push(`${currentNote.slice(3, 4)}`)
//             } else {
//                 scaleNotes.push(`${currentNote}`)
//             }
//         } else {
//             currentNote.length > 1 ? scaleNotes.push(accidental) : scaleNotes.push(currentNote);
//         }
//         currentNote = iterateNotes(currentNote, interval);
//     });
//     return scaleNotes;

// }



export const Chord = {
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

export const Scale = {
    major: (root) => {
        return getScale(root, 'major');
    },
    minor: (root) => {
        return getScale(root, 'minor');
    },
    harmonicMinor: (root) => {
        return getScale(root, 'harmonicMinor');
    },
    melodicMinor: (root) => {
        return getScale(root, 'melodicMinor');
    }
    ,
    diminished: (root) => {
        return getScale(root, 'diminished');
    },
    augmented: (root) => {
        return getScale(root, 'augmented');
    }
    ,
    majorPentatonic: (root) => {
        return getScale(root, 'majorPentatonic');
    }
    ,
    minorPentatonic: (root) => {
        return getScale(root, 'minorPentatonic');
    }
    ,
    blues: (root) => {
        return getScale(root, 'blues');
    }
    ,
    wholeTone: (root) => {
        return getScale(root, 'wholeTone');
    }
    ,
    chromatic: (root) => {
        return getScale(root, 'chromatic');
    }


}








