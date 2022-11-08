import React, { useContext, useRef } from 'react'
import { MusicContext, MusicContextProvider } from '../Context/MusicContext';
import GuitarString from './GuitarString';

const Fretboard = () => {
    const tuning = ["E", "A", "D", "G", "B", "e"];
    const thickness = useRef(0);
    const { note, chord, scale, shape, setShape } = useContext(MusicContext);

    return (
        <div className='fretboard'>

            {//TODO: get this from context

            }


            {tuning.reverse().map((note => {
                thickness.current++;
                return <GuitarString key={note} note={note} thickness={JSON.stringify(thickness.current)} />
            }))}

            <h1>{JSON.stringify(shape)}</h1>
        </div >
    )
}

export default Fretboard

