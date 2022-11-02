import React, { useContext, useRef } from 'react'
import { MusicContext, MusicContextProvider } from '../Context/MusicContext';
import GuitarString from './GuitarString';

const Fretboard = () => {
    const tuning = ["E", "A", "D", "G", "B", "e"];
    const thickness = useRef(0);
    const { note, chord, scale, } = useContext(MusicContext);

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
                thickness.current++;
                return <GuitarString key={note} note={note} thickness={JSON.stringify(thickness.current)} />
            }))}


        </div>
    )
}

export default Fretboard

