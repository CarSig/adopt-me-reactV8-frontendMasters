/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'

import { useChordInterval } from '../hooks/useChordInterval';
import { MusicContext } from '../Context/MusicContext'
import { getIntervalColor } from '../functions/getIntervalColor';
import { playChord } from '../functions/playNotes';
import { usePlayNote } from '../hooks/usePlayNote';

const Fret = ({ fret, octave, stringNumber }) => {
    const { shape, chord, scale, selectorType, selectorNote, shapeCoordinates } = useContext(MusicContext);
    const { selected, interval } = useChordInterval(fret, stringNumber);

    const [playNote, setPlayNote] = useState([null, null, null, null, null, null])

    const selectPlayNote = (stringNumber) => {
        const newPlayNotes = playNote.map((note, index) => {
            if (index === stringNumber - 1) {
                return fret.fretNumber
            }
            return note
        })
        return newPlayNotes.reverse()
    }
    // const noteToPlay = usePlayNote(stringNumber, fret)


    const handleClick = () => {



        // playSound()
        playChord(selectPlayNote(stringNumber))
        // playChord(noteToPlay)
        console.log(shapeCoordinates)
        console.log("key: ", shapeCoordinates[stringNumber], " value: ", stringNumber, " pressed: ", fret.fretNumber)
        if (shapeCoordinates[stringNumber] === fret.fretNumber) {
            console.log("YEAH")
        }

        console.log("interval: ", interval)
    }


    const styles = {
        fret: {
            width: `${fret.fretWidth * 3.4}rem`,
            fontWeight: `${fret?.fretNote?.length < 2 ? "bold" : "normal"}`,
            fontSize: `${fret?.fretNote?.length < 2 ? "1rem" : "0.8rem"}`,
            cursor: "pointer",
        },
        note: {
            color: "black",
            border: "none",
        },

    }

    const colors = getIntervalColor(interval)

    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events

        <div onClick={handleClick} style={styles.fret} className="fret">
            <div className={`note ${selectorNote === fret.fretNote ? "note-selected" : null}`} style={{ backgroundColor: selected && colors, color: selected && "white" }}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : fret.fretNote}
                {octave}

            </div>
        </div>


    )
}

export default Fret


