
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


export const getScale = (root, scale) => {
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








