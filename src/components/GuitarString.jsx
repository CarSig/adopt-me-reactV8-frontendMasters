import React from 'react'
import Fret from './Fret'
import getFrets from '../functions/getFrets'

const GuitarString = ({ note }) => {


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                width: "50px",
                height: "30px",
                backgroundColor: "grey",

                justifyText: "center",
                textAlign: "center",
                cursor: "pointer",
            }}>{note}</div>


            {getFrets(note).map((fret, index) => {
                return <Fret key={index} fret={fret} emptyStringNote={note} />
            }
            )}

        </div>
    )
}

export default GuitarString