/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote';
// import COLOR_NOTE from '../constants/COLORS';

import { MusicContext } from '../Context/MusicContext'

const Fret = ({ fret, octave, stringNumber }) => {
    const { shape, chord, scale, selectorType, selectorNote, allFretsMap } = useContext(MusicContext);
    const [selected, setSelected] = useState(false);
    const sharpNote = fret?.fretNote?.slice(0, 2)
    const flatNote = fret?.fretNote?.slice(3, 5)
    // const third = (chord?.notes[1] || scale?.note[2]) === fret.fretNote
    // const fifth = (chord?.notes[2] || scale?.note[4]) === fret.fretNote


    useEffect(() => {

        const activeShape = selectorType === 'shape' && allFretsMap[stringNumber][fret.fretNumber] === true

        const activeChord = selectorType === 'chord' && (chord?.notes?.includes(fret.fretNote) || chord?.notes?.includes(sharpNote) || chord?.notes?.includes(flatNote))
        const activeScale = selectorType === 'scale' && (scale?.notes?.includes(fret.fretNote) || scale?.notes?.includes(sharpNote) || scale?.notes?.includes(flatNote))
        const activeNote = activeChord || activeScale || activeShape


        setSelected(activeNote)

    }, [selectorType, chord, scale, shape, allFretsMap])

    const sound = fret?.fretNote?.length > 1 ? Notes[`${fret.fretNote.slice(0, 2)}`] : Notes[fret.fretNote];


    const [playSound] = useSound(sound)


    const handleClick = () => {
        playSound()
    }



    const styles = {
        fret: {
            width: `${fret.fretWidth * 3.4}rem`,
            fontWeight: `${fret?.fretNote?.length < 2 ? "bold" : "normal"}`,
            fontSize: `${fret?.fretNote?.length < 2 ? "1rem" : "0.8rem"}`,
        },
        note: {
            // backgroundColor: `${selected ? COLOR_NOTE[`${fret.fretNote}`] : null}`,
            color: `${selected ? "white" : "black"} `,
            border: `${selected ? "1px solid black" : "none"} `,
            // backgroundColor: `${selectorNote === fret.fretNote ? "red" : null}`,

        }
    }



    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div onClick={handleClick} style={styles.fret} className="fret">
            <div className={`note ${selectorNote === fret.fretNote ? "note-selected" : null}`} style={styles.note}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : fret.fretNote}
                {octave}
            </div>
        </div>


    )
}

export default Fret


