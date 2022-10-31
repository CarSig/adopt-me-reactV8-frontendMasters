import React, { useState } from 'react'
import Notes from '../SoundNote';
import useSound from 'use-sound';
import ChordEl from './ChordEl';
import { MusicContext } from '../../Context/MusicContext';
import { CHROMATIC_SCALE, SCALE_INTERVALS, Chord, Scale, getScale } from "../../musicTheory";




const SelectorMain = () => {
    const { chord, setChord } = React.useContext(MusicContext);

    const [scale, setScale] = useState("");
    const [scaleNote, setScaleNote] = useState("");
    const [chordState, setChordState] = useState("");
    const [chordNote, setChordNote] = useState("");

    const [displayedScale, setDisplayedScale] = useState(false);
    const [displayedChord, setDisplayedChord] = useState(false);

    const handleScale = () => {

        const result = getScale(scaleNote, scale);

        setDisplayedScale(result);

    }

    const handleChord = () => {
        const notes = Chord[chordState](chordNote);
        const name = chordNote + " " + chordState

        setDisplayedChord(notes);
        setChord({ name, notes })
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
                            setChordState(e.target.value);
                        }}
                        onBlur={(e) => {
                            setChordState(e.target.value);
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