import React, { useContext, useRef, useState } from 'react'
import { MusicContext } from '../Context/MusicContext';
import GuitarString from './GuitarString';
import Slider from './Slider'
import { playChord } from '../functions/playNotes';
import { ThemeContext } from '../Context/ThemeContext';
// import { useQuickTheme } from '../hooks/useQuickTheme';
import ColorTest from './ColorTest';
const Fretboard = () => {
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor, textColor, backgroundColor, } = useContext(ThemeContext)

    const tuning = ["E", "A", "D", "G", "B", "e"];

    let thickness = useRef(1);
    const { chord, scale, shape, selectorNote, selectorShape, selectorType, selectorChord, playNotes } = useContext(MusicContext);
    const [delay, setDelay] = useState(125);



    return (
        <div className='fretboard'>


            <ColorTest />



            <h2>{selectorNote} {selectorChord} in {selectorShape} shape </h2>
            <button style={{ backgroundColor: primaryColor }} onClick={() => { playChord(playNotes, 6, delay) }}>play lower octave </button>
            <button style={{ backgroundColor: secondaryColor }} onClick={() => { playChord(playNotes.map(note => note + 12), 6, delay) }}>play higher octave </button>
            <Slider delay={delay} setDelay={setDelay} />
            {



            }
            <h2>chord:{chord.name} ---- {chord.notes}</h2>
            <h2>scale:{scale.name} ---- {scale.notes}</h2>
            <h2>shape:{JSON.stringify(shape.frets)} ---- chord {selectorNote} {selectorChord} in {selectorShape} shape --- {chord.notes}</h2>





            <div className='guitar-neck'>
                {
                    tuning.reverse().map((note => {
                        thickness.current = tuning.indexOf(note) + 1;

                        return <GuitarString key={note} note={note} thickness={JSON.stringify(thickness.current)} />
                    }))
                }
            </div>


        </div >
    )
}

export default Fretboard

