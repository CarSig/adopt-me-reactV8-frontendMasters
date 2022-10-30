import React, { useState, useEffect } from 'react'
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



    function getFrets() {
        let frets = [];
        let totalFrets = 21;
        let noteIndex = CHROMATIC_SCALE.indexOf(note) + 1
        let scaleLength = 51.5;
        let fretNumber = 0
        for (let i = 0; i < totalFrets; i++) {
            let fretWidth = scaleLength / 17.82;
            let fretNote = CHROMATIC_SCALE[noteIndex];
            noteIndex++;
            if (noteIndex > 11) {
                noteIndex = 0;
            }
            fretNumber++;
            frets.push({ fretWidth, fretNote, fretNumber });
            scaleLength -= fretWidth;
        }

        return frets;

    }




    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                width: "50px",
                height: "30px",
                backgroundColor: "grey",

                justifyText: "center",
                textAlign: "center",
                cursor: "pointer",
            }}>{note}</div>


            {getFrets().map((fret, index) => {
                return <Fret key={index} fret={fret} emptyStringNote={note} />
            }
            )}

        </div>
    )
}

export default GuitarString