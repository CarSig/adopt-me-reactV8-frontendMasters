import React, { useContext } from 'react'
import { Chord, CAGEDshapes } from "../../musicTheory";
import useMusicGrouping from '../../hooks/useMusicGrouping';
import { MusicContext } from '../../Context/MusicContext';



import NoteSelector from './NoteSelector'
import MultiSelector from './MultiSelector'









const ChordSelector = ({ type }) => {
    const { handleScale, handleChord, handleShape } = useMusicGrouping();
    const defaultValue = " major"
    const { setSelectorChord, chord, setSelectorShape } = useContext(MusicContext)

    return (
        <div className={`chord-scale-selector ${type}`} >
            <label htmlFor={type}>
                Chords
                <select className={type} defaultValue={defaultValue}
                    id={type}
                    name={type}
                    onChange={(e) => {
                        setSelectorChord(e.target.value);
                        console.log(e.target.value)
                        handleChord()
                        console.log(chord)

                    }}

                >
                    <option disabled />

                    {Object.keys(Chord).map((option) => (
                        <option key={option} className={type} value={option}>
                            {option}

                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default ChordSelector

