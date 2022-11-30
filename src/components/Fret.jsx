/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react'
import { useChordInterval } from '../hooks/useChordInterval';
import { MusicContext } from '../Context/MusicContext'
import { getIntervalColor } from '../functions/getIntervalColor';
import { playChord } from '../functions/playNotes';
import { StyledFret, StyledNote } from './styles/Fret.style'




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




    const colors = getIntervalColor(interval)
    const formattedNote = accidental === "sharp" ? fret.fretNote?.slice(0, 2) : fret.fretNote?.slice(3, 5)


    return (

        <StyledFret stringNumber={stringNumber} onClick={handleClick}>

            <StyledNote className={`note ${selectorNote === fret.fretNote ? "note-selected" : null}`} style={{ backgroundColor: selected && colors, color: selected ? "#eee" : "#555", "zIndex": -1 }}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : formattedNote}
                {
                    // octave
                }

            </StyledNote>
        </StyledFret>


    )
}

export default Fret


