import React, { useState } from 'react'
import Notes from '../SoundNote';
import useSound from 'use-sound';
import ChordEl from './ChordEl';

import { CHROMATIC_SCALE, SCALE_INTERVALS, Chord, Scale, getScale } from "../../musicTheory";




const SelectorMain = () => {
    const [scale, setScale] = useState("");
    const [scaleNote, setScaleNote] = useState("");
    const [chord, setChord] = useState("");
    const [chordNote, setChordNote] = useState("");

    const [displayedScale, setDisplayedScale] = useState(false);
    const [displayedChord, setDisplayedChord] = useState(false);

    const handleScale = () => {

        const result = getScale(scaleNote, scale);

        setDisplayedScale(result);

    }

    const handleChord = () => {
        const result = Chord[chord](chordNote);


        setDisplayedChord(result);

    }


    return (
        <div className='selectorMain'>
            <div>
                <label htmlFor="note">
                    Note

                    <select
                        id="note"
                        name="note"
                        onChange={(e) => {
                            setScaleNote(e.target.value);
                        }}
                        onBlur={(e) => {
                            setScaleNote(e.target.value);
                        }}
                    >
                        <option />

                        {CHROMATIC_SCALE.map((note) => (
                            <option key={note} value={note}>
                                {note}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="scale">
                    scale

                    <select
                        id="scale"
                        name="scale"
                        onChange={(e) => {
                            setScale(e.target.value);
                        }}
                        onBlur={(e) => {
                            setScale(e.target.value);
                        }}
                    >
                        <option />

                        {Object.keys(Scale).map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>

                <button onClick={handleScale}>Scale</button>


                {displayedScale}

            </div>

            <div>

                <label htmlFor="note">
                    Note

                    <select
                        id="note"
                        name="note"
                        onChange={(e) => {
                            setChordNote(e.target.value);
                        }}
                        onBlur={(e) => {
                            setChordNote(e.target.value);
                        }}
                    >
                        <option />

                        {CHROMATIC_SCALE.map((note) => (
                            <option key={note} value={note}>
                                {note}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="chord">
                    Chord

                    <select
                        id="chord"
                        name="chord"
                        onChange={(e) => {
                            setChord(e.target.value);
                        }}
                        onBlur={(e) => {
                            setChord(e.target.value);
                        }}
                    >
                        <option />

                        {Object.keys(Chord).map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={handleChord}>Chord</button>
                <ChordEl displayedChord={displayedChord} />
            </div>










        </div>
    )
}


export default SelectorMain