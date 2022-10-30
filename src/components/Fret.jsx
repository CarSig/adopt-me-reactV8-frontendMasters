import React, { useState } from 'react'




const Fret = ({ fret, setOneNotePerString, oneNotePerString }) => {
    const [selected, setSelected] = useState(false);

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

        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div onClick={() => { setSelected(!selected) }} style={styles}>{fret?.fretNote?.length < 2 ? fret.fretNote : "*"}</div>
    )
}

export default Fret


