import React from 'react'

import GuitarString from './GuitarString';

const Fretboard = () => {
    const tuning = ["E", "A", "D", "G", "B", "E2"];

    return (
        <div style={{
            display: "block",
            marginLeft: "50px",
            marginRight: "auto",
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            boxSizing: "border-box"

        }}>


            {tuning.reverse().map((note => {
                return <GuitarString key={note} note={note.slice(0, 1)} />
            }))}




        </div>
    )
}

export default Fretboard

