const CHORDS = {
    "C": {
        major: {
            intervals: [0, 4, 7],
            notes: ["C", "E", "G"],

        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["C", "Eb", "G"],

        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["C", "Eb", "Gb"],


        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["C", "E", "G#"],


        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["C", "E", "G", "B"],

        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["C", "Eb", "G", "Bb"],

        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["C", "E", "G", "Bb"],

        },

        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["C", "E", "G", "Bb"],

        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["C", "Eb", "Gb", "A"],


        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["C", "Eb", "Gb", "Bb"],




        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["C", "Eb", "G", "B"],

        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["C", "D", "G"],

        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["C", "F", "G"],

        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["C", "E", "G", "D"],

        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["C", "E", "G", "F"],

        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["C", "E", "G", "A"],

        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["C", "E", "G", "A"],

        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["C", "Eb", "G", "A"],

        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["C", "E", "G", "A"],

        },

        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["C", "E", "G", "Bb", "D"],

        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["C", "Eb", "G", "Bb", "D"],

        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["C", "E", "G", "B", "D"],

        }
    },
    "C#": {
        major: {
            intervals: [0, 4, 7],
            notes: ["C#", "F", "G#"],

        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["C#", "E", "G#"],

        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["C#", "E", "G"],

        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["C#", "F", "A"],

        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["C#", "F", "G#", "C"],

        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["C#", "E", "G#", "B"],

        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["C#", "F", "G#", "B"],

        },

        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["C#", "F", "G#", "B"],

        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["C#", "E", "G", "A#"],

        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
        }
        ,
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["C#", "E", "G#", "C"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["C#", "D#", "G#"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["C#", "F#", "G#"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["C#", "F", "G#", "D#"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["C#", "F", "G#", "F#"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["C#", "F", "G#", "A#"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["C#", "F", "G#", "A#"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["C#", "E", "G#", "A#"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["C#", "F", "G#", "A#"],
        },

        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["C#", "F", "G#", "B", "D#"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["C#", "E", "G#", "B", "D#"],
        },

        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["C#", "F", "G#", "C", "D#"],


        }
    }, "D": {
        major: {
            intervals: [0, 4, 7],
            notes: ["D", "F#", "A"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["D", "F", "A"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["D", "F", "Ab"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["D", "F#", "A#"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["D", "F#", "A", "C#"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["D", "F", "A", "C"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["D", "F#", "A", "C"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["D", "F#", "A", "C"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["D", "F", "Ab", "B"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["D", "F", "Ab", "C"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["D", "F", "A", "C#"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["D", "E", "A"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["D", "G", "A"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["D", "F#", "A", "E"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["D", "F#", "A", "G"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["D", "F#", "A", "B"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["D", "F#", "A", "B"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["D", "F", "A", "B"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["D", "F#", "A", "B"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["D", "F#", "A", "C", "E"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["D", "F", "A", "C", "E"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["D", "F#", "A", "C#", "E"],
        }
    },
    "D#": {
        major: {
            intervals: [0, 4, 7],
            notes: ["D#", "G", "A#"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["D#", "F#", "A#"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["D#", "F#", "A"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["D#", "G", "B"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["D#", "G", "A#", "D"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["D#", "F#", "A#", "C#"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["D#", "G", "A#", "C#"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["D#", "G", "A#", "C#"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["D#", "F#", "A", "C"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["D#", "F#", "A", "C#"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["D#", "F#", "A#", "D"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["D#", "F", "A#"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["D#", "G#", "A#"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["D#", "G", "A#", "F"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["D#", "G", "A#", "G#"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["D#", "G", "A#", "C"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["D#", "G", "A#", "C"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["D#", "F#", "A#", "C"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["D#", "G", "A#", "C"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["D#", "G", "A#", "C#", "F"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["D#", "F#", "A#", "C#", "F"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["D#", "G", "A#", "D", "F"],
        }
    },
    E: {
        major: {
            intervals: [0, 4, 7],
            notes: ["E", "G#", "B"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["E", "G", "B"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["E", "G", "Bb"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["E", "G#", "C"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["E", "G#", "B", "D#"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["E", "G", "B", "D"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["E", "G#", "B", "D"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["E", "G#", "B", "D"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["E", "G", "Bb", "Db"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["E", "G", "Bb", "D"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["E", "G", "B", "D#"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["E", "G", "B"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["E", "A", "B"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["E", "G#", "B", "F#"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["E", "G#", "B", "A"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["E", "G#", "B", "Db"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["E", "G#", "B", "Db"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["E", "G", "B", "Db"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["E", "G#", "B", "Db"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["E", "G#", "B", "D", "F#"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["E", "G", "B", "D", "F#"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["E", "G#", "B", "D#", "F#"],
        }
    },
    F: {
        major: {
            intervals: [0, 4, 7],
            notes: ["F", "A", "C"]
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["F", "Ab", "C"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["F", "Ab", "B"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["F", "A", "C#"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["F", "A", "C", "E"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["F", "Ab", "C", "Eb"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["F", "A", "C", "Eb"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["F", "A", "C", "Eb"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["F", "Ab", "B", "D"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["F", "Ab", "B", "Eb"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["F", "Ab", "C", "E"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["F", "Ab", "C"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["F", "Bb", "C"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["F", "A", "C", "G"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["F", "A", "C", "A"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["F", "A", "C", "B"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["F", "A", "C", "D"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["F", "Ab", "C", "D"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["F", "A", "C", "D"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["F", "A", "C", "Eb", "G"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["F", "Ab", "C", "Eb", "G"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["F", "A", "C", "E", "G"],
        }
    },
    "F#": {
        major: {
            intervals: [0, 4, 7],
            notes: ["F#", "A#", "C#"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["F#", "A", "C#"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["F#", "A", "C"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["F#", "A#", "D"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["F#", "A#", "C#", "F"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["F#", "A", "C#", "E"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["F#", "A#", "C#", "E"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["F#", "A#", "C#", "E"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["F#", "A", "C", "Eb"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["F#", "A", "C", "E"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["F#", "A", "C#", "F"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["F#", "A", "C#"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["F#", "B", "C#"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["F#", "A#", "C#", "G#"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["F#", "A#", "C#", "A#"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["F#", "A#", "C#", "C"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["F#", "A#", "C#", "D#"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["F#", "A", "C#", "D#"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["F#", "A#", "C#", "D#"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["F#", "A#", "C#", "E", "G#"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["F#", "A", "C#", "E", "G#"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["F#", "A#", "C#", "F", "G#"],
        }
    },
    "G": {
        major: {
            intervals: [0, 4, 7],
            notes: ["G", "B", "D"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["G", "A#", "D"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["G", "A#", "C#"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["G", "B", "E"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["G", "B", "D", "F"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["G", "A#", "D", "F"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["G", "B", "D", "F"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["G", "B", "D", "F"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["G", "A#", "C#", "E"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["G", "A#", "C#", "F"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["G", "A#", "D", "F"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["G", "A#", "D"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["G", "C", "D"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["G", "B", "D", "A"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["G", "B", "D", "C"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["G", "B", "D", "E"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["G", "B", "D", "E"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["G", "A#", "D", "E"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["G", "B", "D", "E"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["G", "B", "D", "F", "A"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["G", "A#", "D", "F", "A"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["G", "B", "D", "F", "A"],
        }
    },
    "G#": {
        major: {
            intervals: [0, 4, 7],
            notes: ["G#", "C", "D#"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["G#", "B", "D#"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["G#", "B", "D"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["G#", "C", "F"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["G#", "C", "D#", "F#"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["G#", "B", "D#", "F#"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["G#", "C", "D#", "F#"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["G#", "C", "D#", "F#"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["G#", "B", "D", "F"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["G#", "B", "D", "F#"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["G#", "B", "D#", "F#"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["G#", "B", "D#"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["G#", "C#", "D#"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["G#", "C", "D#", "A#"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["G#", "C", "D#", "C#"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["G#", "C", "D#", "F"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["G#", "C", "D#", "F"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["G#", "B", "D#", "F"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["G#", "C", "D#", "F"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["G#", "C", "D#", "F#", "A#"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["G#", "B", "D#", "F#", "A#"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["G#", "C", "D#", "F#", "A#"],
        }
    },
    "A": {
        major: {
            intervals: [0, 4, 7],
            notes: ["A", "C#", "E"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["A", "C", "E"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["A", "C", "D#"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["A", "C#", "F#"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["A", "C#", "E", "G"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["A", "C", "E", "G"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["A", "C#", "E", "G"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["A", "C#", "E", "G"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["A", "C", "D#", "F#"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["A", "C", "D#", "G"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["A", "C", "E", "G"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["A", "C", "E"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["A", "D", "E"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["A", "C#", "E", "B"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["A", "C#", "E", "D"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["A", "C#", "E", "F#"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["A", "C#", "E", "F#"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["A", "C", "E", "F#"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["A", "C#", "E", "F#"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["A", "C#", "E", "G", "B"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["A", "C", "E", "G", "B"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["A", "C#", "E", "G", "B"],
        }
    },
    "A#": {
        major: {
            intervals: [0, 4, 7],
            notes: ["A#", "D", "F#"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["A#", "C#", "F#"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["A#", "C#", "E"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["A#", "D", "G"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["A#", "D", "F#", "A"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["A#", "C#", "F#", "A"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["A#", "D", "F#", "A"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["A#", "D", "F#", "A"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["A#", "C#", "E", "G"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["A#", "C#", "E", "A"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["A#", "C#", "F#", "A"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["A#", "C#", "F#"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["A#", "D#", "F#"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["A#", "D", "F#", "C#"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["A#", "D", "F#", "E"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["A#", "D", "F#", "G"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["A#", "D", "F#", "G"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["A#", "C#", "F#", "G"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["A#", "D", "F#", "G"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["A#", "D", "F#", "A", "C#"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["A#", "C#", "F#", "A", "C#"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["A#", "D", "F#", "A", "C#"],
        }
    },
    "B": {
        major: {
            intervals: [0, 4, 7],
            notes: ["B", "D#", "G"],
        },
        minor: {
            intervals: [0, 3, 7],
            notes: ["B", "D", "G"],
        },
        diminished: {
            intervals: [0, 3, 6],
            notes: ["B", "D", "F"],
        },
        augmented: {
            intervals: [0, 4, 8],
            notes: ["B", "D#", "G#"],
        },
        major7: {
            intervals: [0, 4, 7, 11],
            notes: ["B", "D#", "G", "A#"],
        },
        minor7: {
            intervals: [0, 3, 7, 10],
            notes: ["B", "D", "G", "A#"],
        },
        seventh: {
            intervals: [0, 4, 7, 10],
            notes: ["B", "D#", "G", "A#"],
        },
        dominant7: {
            intervals: [0, 4, 7, 10],
            notes: ["B", "D#", "G", "A#"],
        },
        diminished7: {
            intervals: [0, 3, 6, 9],
            notes: ["B", "D", "F", "G#"],
        },
        halfDiminished7: {
            intervals: [0, 3, 6, 10],
            notes: ["B", "D", "F", "A#"],
        },
        minorMajor7: {
            intervals: [0, 3, 7, 11],
            notes: ["B", "D", "G", "A#"],
        },
        sus2: {
            intervals: [0, 2, 7],
            notes: ["B", "D", "G"],
        },
        sus4: {
            intervals: [0, 5, 7],
            notes: ["B", "E", "G"],
        },
        add9: {
            intervals: [0, 4, 7, 14],
            notes: ["B", "D#", "G", "D"],
        },
        add11: {
            intervals: [0, 4, 7, 17],
            notes: ["B", "D#", "G", "F"],
        },
        add13: {
            intervals: [0, 4, 7, 21],
            notes: ["B", "D#", "G", "A"],
        },
        sixth: {
            intervals: [0, 4, 7, 9],
            notes: ["B", "D#", "G", "A"],
        },
        minorSixth: {
            intervals: [0, 3, 7, 9],
            notes: ["B", "D", "G", "A"],
        },
        majorSixth: {
            intervals: [0, 4, 7, 9],
            notes: ["B", "D#", "G", "A"],
        },
        ninth: {
            intervals: [0, 4, 7, 10, 14],
            notes: ["B", "D#", "G", "A#", "D"],
        },
        minorNinth: {
            intervals: [0, 3, 7, 10, 14],
            notes: ["B", "D", "G", "A#", "D"],
        },
        majorNinth: {
            intervals: [0, 4, 7, 11, 14],
            notes: ["B", "D#", "G", "A#", "D"],
        }
    }
}

export default CHORDS