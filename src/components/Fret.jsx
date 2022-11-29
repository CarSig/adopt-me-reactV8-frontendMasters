/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import { useChordInterval } from '../hooks/useChordInterval';
import { MusicContext } from '../Context/MusicContext'
import { getIntervalColor } from '../functions/getIntervalColor';
import { playChord } from '../functions/playNotes';
import { usePlayNote } from '../hooks/usePlayNote';



const Fret = ({ fret, octave, stringNumber }) => {
    const { accidental, selectorNote, } = useContext(MusicContext);
    const { selected, interval } = useChordInterval(fret, stringNumber);

    const [playNote,] = useState([null, null, null, null, null, null])

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

        playChord(selectPlayNote(stringNumber))


    }


    const styles = {
        fret: {
            width: `${fret.fretWidth * 3.4}rem`,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
        },
        note: {
            color: "black",
            border: "none",
        },

    }

    const colors = getIntervalColor(interval)
    const formatedNote = accidental === "sharp" ? fret.fretNote?.slice(0, 2) : fret.fretNote?.slice(3, 5)


    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events

        <div onClick={handleClick} style={styles.fret} className="fret">
            {
                //note-selected daje bijeli border
            }
            <div className={`note ${selectorNote === fret.fretNote ? "note-selected" : null}`} style={{ backgroundColor: selected && colors, color: "white" }}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : formatedNote}
                {octave}

            </div>
        </div>


    )
}

export default Fret


