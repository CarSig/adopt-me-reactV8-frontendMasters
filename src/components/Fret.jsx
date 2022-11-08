/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote';
import COLOR_NOTE from '../constants/COLORS';

import { MusicContext } from '../Context/MusicContext'

const Fret = ({ fret, oneNotePerString, octave, thickness }) => {
    const { note, chord, scale } = useContext(MusicContext);
    // const isIn = chord?.includes(fret.fretNote)
    const shape = { "1": 2, "2": 2, "3": 4, "4": 5, "5": null, "6": null }
    // const activeNote = chord.notes.includes(fret.fretNote)

    const activeNote = shape[thickness] === fret.fretNumber

    const [selected, setSelected] = useState(activeNote);


    // useEffect(() => {
    //     setSelected(activeNote)
    // }, [chord])

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
            border: '1px solid black',
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
            // contrast letters with background color
            color: `${selected && !oneNotePerString ? "white" : "black"}`,
            border: `${selected && !oneNotePerString ? "1px solid black" : "none"}`,
            // align text in center of fret
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // align text in center of fret
            textAlign: "center",
        }
    }

    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div onClick={handleClick} style={styles.fret} className="fret">
            <div className="note" style={styles.note}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : fret.fretNote}


            </div>
        </div>


    )
}

export default Fret


