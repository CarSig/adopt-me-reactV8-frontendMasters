import React, { useRef, useContext, useState, useEffect } from 'react'
import Fret from './Fret'
import getFrets from '../functions/getFrets'
import { MusicContext } from '../Context/MusicContext';
import { useChordInterval } from '../hooks/useChordInterval';
import { playChord } from '../functions/playNotes';

const GuitarString = ({ note, thickness }) => {
    const emptyString = { fretNote: note.toUpperCase(), fretNumber: 0 }


    const { colors } = useChordInterval(emptyString, thickness);
    const { shapeCoordinates } = useContext(MusicContext);
    const startOctave = thickness < 2 ? 3 : thickness < 4 ? 2 : 1;
    const octave = useRef(startOctave);
    const [emptyStringNote, setEmptyStringNote] = useState("")
    useEffect(() => {
        setEmptyStringNote(shapeCoordinates[`${thickness}`])
    }, [shapeCoordinates])

    const selectPlayNote = (stringNumber) => {
        const newPlayNotes = playNote.map((note, index) => {
            if (index === stringNumber - 1) {
                return Fret.fretNumber
            }
            return note
        })
        return newPlayNotes.reverse()
    }


    const handleClick = () => {
        playChord(selectPlayNote(thickness))
        console.log(thickness)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                width: "50px",
                height: "40px",
                backgroundColor: `${emptyStringNote === 0 ? colors : "#2d210f"}`,
                color: `${emptyStringNote === 0 ? "black" : "white"}`,
                fontWeight: "bold",
                justifyText: "center",
                textAlign: "center",
                cursor: "pointer",
            }}
                onClick={handleClick}>{note}  {thickness}   </div>


            {
                getFrets(note).map((fret, index) => {

                    if (thickness < 2) {
                        octave.current = 3
                    } else if (thickness < 4) {
                        octave.current = 2
                    } else {
                        octave.current = 1
                    }
                    fret.fretNote === "E" && octave.current++;

                    return <Fret key={index} fret={fret} emptyStringNote={note} octave={octave.current} stringNumber={thickness} />
                }

                )
            }

        </div >
    )
}

export default GuitarString