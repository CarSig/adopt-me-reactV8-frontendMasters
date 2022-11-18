import React, { useContext, useRef } from 'react'
import { MusicContext } from '../Context/MusicContext';
import GuitarString from './GuitarString';
import { playChord } from '../functions/playNotes';

const Fretboard = () => {

    const tuning = ["E", "A", "D", "G", "B", "e"];

    let thickness = useRef(1);
    const { chord, scale, shape, selectorNote, selectorShape, selectorType, selectorChord, playNotes } = useContext(MusicContext);



    return (
        <div className='fretboard'>
            <button onClick={() => { playChord(playNotes) }}>play {selectorNote} {selectorChord} in {selectorShape} shape </button>
            <button onClick={() => { playChord(playNotes.map(note => note + 12)) }}>play octave higher </button>


            <h2>chord:{chord.name} ---- {chord.notes}</h2>
            <h2>scale:{scale.name} ---- {scale.notes}</h2>
            <h2>shape:{JSON.stringify(shape.frets)} ---- chord {selectorNote} {selectorChord} in {selectorShape} shape --- {chord.notes}---note krivo</h2>






            {
                tuning.reverse().map((note => {
                    thickness.current = tuning.indexOf(note) + 1;

                    return <GuitarString key={note} note={note} thickness={JSON.stringify(thickness.current)} />
                }))
            }


        </div >
    )
}

export default Fretboard

