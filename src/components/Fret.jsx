/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useEffect } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote';
// import COLOR_NOTE from '../constants/COLORS';

import { MusicContext } from '../Context/MusicContext'

const Fret = ({ fret, octave, stringNumber }) => {
    const { shape, chord, scale, selectorType, selectorNote, shapeCoordinates } = useContext(MusicContext);
    const [selected, setSelected] = useState(false);
    const [interval, setinterval] = useState("");


    const sharpNote = fret?.fretNote?.slice(0, 2)
    const flatNote = fret?.fretNote?.slice(3, 5)

    const checkInterval = () => {
        if (selectorNote === fret.fretNote) {
            setinterval("root")
        }
        else if (chord?.notes?.length > 1) {
            if (chord?.notes[1] === fret.fretNote) {
                setinterval("third")
            } else if (chord?.notes[2] === fret.fretNote) {
                setinterval("fifth")
            } else if (chord?.notes[3] === fret.fretNote) {
                setinterval("seventh")
            } else if (chord?.notes[4] === fret.fretNote) {
                setinterval("ninth")
            }
        }

    }


    // const root = selectorNote === fret.fretNote
    // const third = chord?.notes?.length > 1 ? (chord?.notes[1] || scale?.note[2]) === fret.fretNote : false
    // const fifth = chord?.notes?.length > 1 ? (chord?.notes[2] || scale?.note[4]) === fret.fretNote : false


    useEffect(() => {
        setSelected(false)
        //* ovdje dodati da se moze iskljcuiti dupli prikaz
        const activeShape = selectorType === 'shape' && (shapeCoordinates[stringNumber] === fret.fretNumber || shapeCoordinates[stringNumber] === fret.fretNumber - 12)


        const activeChord = selectorType === 'chord' && (chord?.notes?.includes(fret.fretNote) || chord?.notes?.includes(sharpNote) || chord?.notes?.includes(flatNote))
        const activeScale = selectorType === 'scale' && (scale?.notes?.includes(fret.fretNote) || scale?.notes?.includes(sharpNote) || scale?.notes?.includes(flatNote))
        const activeNote = activeChord || activeScale || activeShape


        setSelected(activeShape)
        // setSelected(activeNote)
        setInterval(checkInterval())

    }, [selectorType, chord, scale, shape, shapeCoordinates])

    const sound = fret?.fretNote?.length > 1 ? Notes[`${fret.fretNote.slice(0, 2)}`] : Notes[fret.fretNote];


    const [playSound] = useSound(sound)


    const handleClick = () => {
        playSound()
        console.log(shapeCoordinates)
        console.log("key: ", shapeCoordinates[stringNumber], " value: ", stringNumber, " pressed: ", fret.fretNumber)
        if (shapeCoordinates[stringNumber] === fret.fretNumber) {
            console.log("YEAH")
        }
        console.log("root: ")
    }



    const styles = {
        fret: {
            width: `${fret.fretWidth * 3.4}rem`,
            fontWeight: `${fret?.fretNote?.length < 2 ? "bold" : "normal"}`,
            fontSize: `${fret?.fretNote?.length < 2 ? "1rem" : "0.8rem"}`,
        },
        note: {

            color: "black",
            border: "none",
            // backgroundColor: `${selected ? "red" : null}`,
            // color: `${selected ? "white" : "black"} `,
            // border: `${selected ? "1px solid black" : "none"} `,


        },

    }

    const colors = interval === "third" ? "#448AFF" : interval === "fifth" ? "#009688" : interval === "root" ? "#7C4DFF" : null

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


