import React, { useContext } from 'react'
import { Chord } from "../../musicTheory";
import useMusicGrouping from '../../hooks/useMusicGrouping';
import { MusicContext } from '../../Context/MusicContext';






const ChordSelector = ({ type }) => {
    const { handleChord, handleShape } = useMusicGrouping();
    const defaultValue = "major"
    const { setSelectorChord } = useContext(MusicContext)

    const handleClick = (e) => {
        setSelectorChord(e.target.value)
        handleChord()
        handleShape()
    }


    return (
        <div className={`chord-scale-selector ${type}`} >
            <label htmlFor={type}>
                Chords
                <select className={type} defaultValue={defaultValue}
                    id={type}
                    name={type}
                    onChange={(e) => { handleClick(e) }}>
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

