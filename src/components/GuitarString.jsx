import React, { useRef } from 'react'
import Fret from './Fret'
import getFrets from '../functions/getFrets'

const GuitarString = ({ note, thickness }) => {

    const startOctave = ["E", "A", "D"].some(el => el === note) ? 0 : ["G", "B"].some(el => el === note) ? 1 : 2;
    console.log("startOctave", startOctave)
    const octave = useRef(startOctave);

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
            }}>{note} {thickness} </div>


            {getFrets(note).map((fret, index) => {
                fret.fretNote === "E" && octave.current++;

                return <Fret key={index} fret={fret} emptyStringNote={note} octave={octave.current} />
            }

            )}

        </div>
    )
}

export default GuitarString