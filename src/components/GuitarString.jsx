import React from 'react'
import Fret from './Fret'
import { CHROMATIC_SCALE } from '../musicTheory';

const GuitarString = ({ note }) => {

    //  get array of notes for string for 21 frets
    const notes = (numberOfFrets) => {
        const fretNotes = [];
        let noteIndex = CHROMATIC_SCALE.indexOf(note);
        for (let i = 0; i < numberOfFrets; i++) {
            fretNotes.push(CHROMATIC_SCALE[noteIndex]);
            noteIndex++;
            if (noteIndex > 11) {
                noteIndex = 0;
            }
        }
        return fretNotes;
    }

    console.log(notes(21));




    console.log(notes);

    function getFrets() {
        let frets = [];
        let totalFrets = 21;
        let noteIndex = CHROMATIC_SCALE.indexOf(note) + 1
        let scaleLength = 51.5;
        for (let i = 0; i < totalFrets; i++) {
            let fretWidth = scaleLength / 17.82;
            let fretNote = CHROMATIC_SCALE[noteIndex];
            noteIndex++;
            if (noteIndex > 11) {
                noteIndex = 0;
            }
            frets.push({ fretWidth, fretNote });
            scaleLength -= fretWidth;
        }
        console.log(frets)
        return frets;

    }




    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            {getFrets().map((fret, index) => {
                return <Fret key={index} fret={fret} emptyStringNote={note} />
            }
            )}

        </div>
    )
}

export default GuitarString