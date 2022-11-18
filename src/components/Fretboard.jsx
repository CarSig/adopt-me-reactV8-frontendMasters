import React, { useContext, useRef, useState } from 'react'
import { MusicContext } from '../Context/MusicContext';
import GuitarString from './GuitarString';
import { playChord } from '../functions/playNotes';

const Fretboard = () => {

    const tuning = ["E", "A", "D", "G", "B", "e"];

    let thickness = useRef(1);
    const { chord, scale, shape, selectorNote, selectorShape, selectorType, selectorChord, playNotes } = useContext(MusicContext);
    const [delay, setDelay] = useState(125);

    // create a function that will adjsut speed,bigger number means slower
    const handleSpeed = (e) => {
        // const speedAdjustment = 250 / e.target.value;
        const adjustment = e.target.value;
        setDelay(adjustment);

    }
    return (
        <div className='fretboard'>
            <h2>{selectorNote} {selectorChord} in {selectorShape} shape </h2>
            <button onClick={() => { playChord(playNotes, 6, delay) }}>play lower octave </button>
            <button onClick={() => { playChord(playNotes.map(note => note + 12), 6, delay) }}>play higher octave </button>
            <div >
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "150px" }}>
                    <label htmlFor="speed">delay</label>
                </div>
                <div>
                    <label htmlFor="speed">-</label>
                    <input type="range" min="1" max="225" value={delay} className="slider" id="delayRange" onChange={handleSpeed} />
                    <label htmlFor="speed">+</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "150px" }}>
                    <label htmlFor="speed">{delay}</label>
                </div>
            </div>

            <h2>chord:{chord.name} ---- {chord.notes}</h2>
            <h2>scale:{scale.name} ---- {scale.notes}</h2>
            <h2>shape:{JSON.stringify(shape.frets)} ---- chord {selectorNote} {selectorChord} in {selectorShape} shape --- {chord.notes}</h2>






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

