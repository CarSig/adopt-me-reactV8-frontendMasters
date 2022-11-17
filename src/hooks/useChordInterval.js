import { useContext, useState, useEffect } from "react";

import { MusicContext } from "../Context/MusicContext";

export const useChordInterval = ({ fretNote, fretNumber }, stringNumber) => {
    const { chord, shape, scale, note, selectorType, selectorNote, shapeCoordinates, selectorChord, selectorShape, selectorScale } = useContext(MusicContext);
    const [selected, setSelected] = useState(false);
    const [interval, setInterval] = useState("");
    const sharpNote = fretNote?.slice(0, 2);
    const flatNote = fretNote?.slice(3, 5);


    const checkInterval = () => {
        if (selectorNote === fretNote) {
            setInterval("root")
        }
        else if (chord?.notes?.length > 1) {
            if (chord?.notes[1] === fretNote) {
                setInterval("third")
            } else if (chord?.notes[2] === fretNote) {
                setInterval("fifth")
            } else if (chord?.notes[3] === fretNote) {
                setInterval("seventh")
            } else if (chord?.notes[4] === fretNote) {
                setInterval("ninth")
            }
        }
        return interval
    }

    useEffect(() => {
        setSelected(false)
        //* ovdje dodati da se moze iskljcuiti dupli prikaz
        const activeShape = selectorType === 'shape' && (shapeCoordinates[stringNumber] === fretNumber || shapeCoordinates[stringNumber] === fretNumber - 12)


        const activeChord = selectorType === 'chord' && (chord?.notes?.includes(fretNote) || chord?.notes?.includes(sharpNote) || chord?.notes?.includes(flatNote))
        const activeScale = selectorType === 'scale' && (scale?.notes?.includes(fretNote) || scale?.notes?.includes(sharpNote) || scale?.notes?.includes(flatNote))
        const activeNote = activeChord || activeScale || activeShape


        setSelected(activeShape)
        // setSelected(activeNote)
        setInterval(checkInterval)


    }, [selectorType, chord, scale, shape, note, selectorChord, selectorShape, selectorScale, shapeCoordinates])

    const colors = interval === "third" ? "#448AFF" : interval === "fifth" ? "#009688" : interval === "root" ? "#7C4DFF" : "orange"


    return { selected, interval, colors }

}















