import React, { useContext } from 'react'
import { MusicContext, MusicContextProvider } from '../Context/MusicContext';
import GuitarString from './GuitarString';

const Fretboard = () => {
    const tuning = ["E", "A", "D", "G", "B", "E2"];
    const { note, chord, scale, } = useContext(MusicContext);
    console.log(chord)
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

            {//TODO: get this from context
            }


            {tuning.reverse().map((note => {
                return <GuitarString key={note} note={note.slice(0, 1)} />
            }))}


            <p>{chord.name}</p>
            <p>{chord.notes}</p>

        </div>
    )
}

export default Fretboard

