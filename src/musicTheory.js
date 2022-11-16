
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

export const CAGEDshapes = {
    C: { 6: null, 5: 3, 4: 2, 3: 0, 2: 1, 1: 0 },
    A: { 6: 0, 5: 2, 4: 2, 3: 2, 2: 0, 1: 0 },
    G: { 6: 3, 5: 2, 4: 0, 3: 0, 2: 0, 1: 3 },
    E: { 6: 0, 5: 2, 4: 2, 3: 1, 2: 0, 1: 0 },
    D: { 6: null, 5: null, 4: 0, 3: 2, 2: 3, 1: 2 },
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
    SCALE_INTERVALS[`${scaleType}`]?.forEach(interval => {
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




export const getCAGEDshape = (root, shape) => {
    const fretDelays = { C: 0, "C#": 1, "D♭": 1, D: 2, "D#": 3, "E♭": 3, E: 4, F: 5, "F#": 6, "G♭": 6, G: 7, "G#": 8, "A♭": 8, A: 9, "A#": 10, "B♭": 10, B: 11 };
    //remove accidental from root
    const rootNote = root.slice(0, 2);
    const fretDelay = (fretDelays[rootNote] - fretDelays[shape] >= 0) ? fretDelays[rootNote] - fretDelays[shape] : 12 + fretDelays[rootNote] - fretDelays[shape];
    let stringShape = CAGEDshapes[`${shape}`]

    let finalShape = {}

    for (let guitarString in stringShape) {
        // add fret delay to each string of the shape, unless the string is not played (null)
        const activeFret = (stringShape[`${guitarString}`] !== null) ? stringShape[`${guitarString}`] + fretDelay : null
        // overwrite the shape object with the new guitar string
        finalShape = { ...finalShape, [guitarString]: activeFret }
    }
    console.log("finalShape", finalShape)


    return finalShape


}





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
    augmented: [0, 4, 8],
    sus2: [0, 2, 7],
    sus4: [0, 5, 7],

}

export const SeventhChords = {
    major: [0, 4, 7, 11],
    minor: [0, 3, 7, 10],
    dominant: [0, 4, 7, 10],
    diminished: [0, 3, 6, 9],
    augmented: [0, 4, 8, 10]
}

export const NinthChords = {
    major: [0, 4, 7, 11, 14],
    minor: [0, 3, 7, 10, 14],
    dominant: [0, 4, 7, 10, 14],
    diminished: [0, 3, 6, 9, 13],
    augmented: [0, 4, 8, 10, 14],

}





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



// input any number of notes and get the name of the chord
// export const getChordName = (...notes) => {
//     const root = notes[0];
//     const intervals = notes.map(note => {
//         return CHROMATIC_SCALE.indexOf(note) - CHROMATIC_SCALE.indexOf(root);
//     });
//     const chord = CHORDS.find(chord => {
//         return chord.intervals.every(interval => {
//             return intervals.includes(interval);
//         });
//     });
//     return chord ? chord.name : 'Unknown';
// }


// console.log(getChordName('C', 'E', 'G'));



