import React, { useState } from 'react'
import useSound from 'use-sound'
import Notes from '../components/SoundNote'




const Fret = ({ fret, setOneNotePerString, oneNotePerString }) => {
    const [selected, setSelected] = useState(fret?.activeNote);


    const sound = fret?.fretNote?.length > 1 ? Notes[`${fret.fretNote.slice(0, 2)}`] : Notes[fret.fretNote];


    const [playSound] = useSound(sound)


    const handleClick = () => {
        setSelected(!selected);


        playSound()


        // play audio
    }


    const styles = {

        width: `${fret.fretWidth * 3}rem`,
        height: "30px",
        backgroundColor: `${selected && !oneNotePerString ? "yellow" : "white"}`,
        border: '1px solid black',
        justifyText: "center",
        textAlign: "center",
        cursor: "pointer",

    }

    return (


        <div onClick={handleClick} style={styles}>{fret?.fretNote?.length < 2 ? fret.fretNote : "*"}</div>

    )
}

export default Fret


