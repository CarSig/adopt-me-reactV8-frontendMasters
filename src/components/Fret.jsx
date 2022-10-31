/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote'


import { MusicContext } from '../Context/MusicContext'

const Fret = ({ fret, oneNotePerString }) => {
    const { note, chord, scale, } = useContext(MusicContext);
    // const isIn = chord?.includes(fret.fretNote)
    const activeNote = chord.notes.includes(fret.fretNote)
    const [selected, setSelected] = useState(activeNote);


    useEffect(() => {
        setSelected(activeNote)
    }, [chord])

    const sound = fret?.fretNote?.length > 1 ? Notes[`${fret.fretNote.slice(0, 2)}`] : Notes[fret.fretNote];


    const [playSound] = useSound(sound)


    const handleClick = () => {
        setSelected(!selected);


        playSound()


        // play audio
    }

    // get color for each note in chromatic scale
    const getColor = (note) => {
        const colors = {
            "C": "red",
            "C#": "orange",
            "D": "yellow",
            "D#": "green",
            "E": "blue",
            "F": "indigo",
            "F#": "violet",
            "G": "purple",
            "G#": "pink",
            "A": "fuchsia",
            "A#": "grey",
            "B": "aqua",
        }
        return colors[note]
    }

    const styles = {

        width: `${fret.fretWidth * 3}rem`,
        height: "30px",
        backgroundColor: `${selected && !oneNotePerString ? `${getColor(fret.fretNote)}` : "white"}`,
        border: '1px solid black',
        justifyText: "center",
        textAlign: "center",
        cursor: "pointer",
        fontWeight: `${fret?.fretNote?.length < 2 ? "bold" : "normal"}`,
        fontSize: `${fret?.fretNote?.length < 2 ? "1rem" : "0.8rem"}`,

    }

    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div onClick={handleClick} style={styles}>{fret?.fretNote?.length < 2 ? fret.fretNote : fret.fretNote}</div>

    )
}

export default Fret


