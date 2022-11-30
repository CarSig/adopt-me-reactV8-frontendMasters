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


    const mapFretNumbers = () => {
        let fret = 0
        let arr = []
        while (fret < 24) {
            fret++
            const num = <p style={{ color: "#333" }}>{fret}</p>
            arr.push(num)

        }
        return arr
    }


    return (
        <div className='fretboard'>





            <button style={{ backgroundColor: primaryColor }} onClick={() => { playChord(playNotes, 6, delay) }}>play lower octave </button>
            <button style={{ backgroundColor: secondaryColor }} onClick={() => { playChord(playNotes.map(note => note + 12), 6, delay) }}>play higher octave </button>
            <Slider delay={delay} setDelay={setDelay} />

            <div className="fretNumbers" style={{ display: "flex", justifyContent: "space-between", marginLeft: "4%", marginRight: "1%" }}>
                {mapFretNumbers()}
            </div>


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

