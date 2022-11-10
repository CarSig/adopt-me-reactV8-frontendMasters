import React, { useRef } from 'react'
import Fret from './Fret'
import getFrets from '../functions/getFrets'

const GuitarString = ({ note, thickness }) => {

    const startOctave = thickness < 2 ? 3 : thickness < 4 ? 2 : 1;
    const octave = useRef(startOctave);



    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                width: "50px",
                height: "40px",
                backgroundColor: "grey",
                fontWeight: "bold",
                justifyText: "center",
                textAlign: "center",
                cursor: "pointer",
            }}>{note} {thickness} </div>


            {getFrets(note).map((fret, index) => {

                if (thickness < 2) {
                    octave.current = 3
                } else if (thickness < 4) {
                    octave.current = 2
                }
                else {
                    octave.current = 1
                }


                fret.fretNote === "E" && octave.current++;;






                return <Fret key={index} fret={fret} emptyStringNote={note} octave={octave.current} stringNumber={thickness} />
            }

            )}

        </div>
    )
}

export default GuitarString