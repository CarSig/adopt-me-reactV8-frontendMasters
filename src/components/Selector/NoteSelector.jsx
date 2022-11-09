import React, { useContext } from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";
import { MusicContext } from '../../Context/MusicContext';

const NoteSelector = ({ noteSetter, type }) => {
    const { note, chord, scale, shape, setShape, setNote } = useContext(MusicContext);
    const changeHandler = (e) => {
        noteSetter(e);
        setNote(e);

        console.log(e)
    }

    const noteSelectorOptions = CHROMATIC_SCALE.map((option) => (
        <option key={option} value={option}>{option}</option>
    ))

    return (
        <div className={`note-selector ${type}`}>

            <label htmlFor="note">
                Note
                <select
                    id="note" name="note"
                    onChange={(e) => { changeHandler(e.target.value) }}
                    onBlur={(e) => { changeHandler(e.target.value) }} >
                    {noteSelectorOptions}
                </select>
            </label>
        </div>
    )
}

export default NoteSelector