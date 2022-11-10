/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote';
import COLOR_NOTE from '../constants/COLORS';

import { MusicContext } from '../Context/MusicContext'

const Fret = ({ fret, oneNotePerString, octave, stringNumber }) => {
    const { shape, chord, scale, selector } = useContext(MusicContext);
    const shapeChord = shape?.frets || { 6: 3, 5: 2, 4: 0, 3: 0, 2: 0, 1: 3 }

    const activeShape = shapeChord[stringNumber] === fret.fretNumber
    const activeChord = chord?.notes?.includes(fret.fretNote)
    const activeScale = scale?.notes?.includes(fret.fretNote)

    const activeNote = selector === 'shape' ? activeShape : selector === 'chord' ? activeChord : activeScale

    const [selected, setSelected] = useState(activeNote);


    useEffect(() => {
        setSelected(activeNote)
    }, [shape, selector])

    const sound = fret?.fretNote?.length > 1 ? Notes[`${fret.fretNote.slice(0, 2)}`] : Notes[fret.fretNote];


    const [playSound] = useSound(sound)


    const handleClick = () => {
        setSelected(!selected);
        console.log(fret.fretNote)

        playSound()


        // play audio
    }

    // get color for each note in chromatic scale


    const styles = {
        fret: {
            width: `${fret.fretWidth * 3.4}rem`,
            height: "40px",
            // backgroundColor: "white",
            border: '1px  solid black',
            borderLeft: 'none',
            borderRight: `4px solid #ddd`,
            justifyText: "center",
            textAlign: "center",
            cursor: "pointer",
            fontWeight: `${fret?.fretNote?.length < 2 ? "bold" : "normal"}`,
            fontSize: `${fret?.fretNote?.length < 2 ? "1rem" : "0.8rem"}`,
        },
        note: {
            height: "26px",
            width: "27px",
            backgroundColor: `${selected && COLOR_NOTE[`${fret.fretNote}`]}`,
            borderRadius: "50%",

            color: `${selected && !oneNotePerString ? "white" : "black"} `,
            border: `${selected && !oneNotePerString ? "1px solid black" : "none"} `,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            textAlign: "center",
        }
    }

    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div onClick={handleClick} style={styles.fret} className="fret">
            <div className="note" style={styles.note}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : fret.fretNote}

                {octave}
            </div>
        </div>


    )
}

export default Fret


