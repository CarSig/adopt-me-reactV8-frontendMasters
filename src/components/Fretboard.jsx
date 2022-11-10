import React, { useContext, useRef } from 'react'
import { MusicContext } from '../Context/MusicContext';
import GuitarString from './GuitarString';

const Fretboard = () => {
    const tuning = ["E", "A", "D", "G", "B", "e"];

    let thickness = useRef(0);
    const { chord, scale, shape } = useContext(MusicContext);

    return (
        <div className='fretboard'>
            <h2>chord:{chord.name} ---- {chord.notes}</h2>
            <h2>scale:{scale.name} ---- {scale.notes}</h2>
            <h2>shape:{JSON.stringify(shape.frets)} ---- chord {shape.selectorNote} in {shape.selectorShape} shape</h2>




            {tuning.reverse().map((note => {
                thickness.current = tuning.indexOf(note) + 1;

                return <GuitarString key={note} note={note} thickness={JSON.stringify(thickness.current)} />
            }))}


        </div >
    )
}

export default Fretboard

