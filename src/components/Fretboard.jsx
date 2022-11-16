import React, { useContext, useRef, useState } from 'react'
import { MusicContext } from '../Context/MusicContext';
import GuitarString from './GuitarString';

const Fretboard = () => {

    const tuning = ["E", "A", "D", "G", "B", "e"];

    let thickness = useRef(1);
    const { chord, scale, shape, selectorNote, selectorShape, allFretsMap } = useContext(MusicContext);


    Object.keys(allFretsMap).map((key, index) => {
        // console.log("key", allFretsMap[key]) 
        // console.log("test", allFretsMap["1"]["test"])
        const activeFrets = []
        for (let fret of Object.entries(allFretsMap[key])) {



            if (fret[1]) {

                console.log("fret", fret[0], "value", fret[1])
                // console.log(allFretsMap[key])
                // console.log(fret, fret.valueOf(), allFretsMap[key][`${fret}`],)
                // console.log(typeof fret, typeof fret.valueOf())
                // console.log(key[`${fret}`])

            }




        }


    })



    return (
        <div className='fretboard'>
            <h2>chord:{chord.name} ---- {chord.notes}</h2>
            <h2>scale:{scale.name} ---- {scale.notes}</h2>
            <h2>shape:{JSON.stringify(shape.frets)} ---- chord {selectorNote} in {selectorShape} shape</h2>
            <h3>frets: {JSON.stringify("ss")}</h3>





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

