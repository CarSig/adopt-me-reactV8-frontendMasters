import React, { useContext } from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";
import { MusicContext } from '../../Context/MusicContext';

const NoteSelector = ({ type }) => {
    const { setNote, selectorNote, setSelectorNote } = useContext(MusicContext);
    const changeHandler = (e) => {
        setSelectorNote(e);
        setNote(e);
    }

    const noteSelectorOptions = CHROMATIC_SCALE.map((option) => (
        <option key={option} value={option}>{option}</option>
    ))

    return (
        <div className={`note-selector ${type}`}>

            <label htmlFor="note">
                Note
                <select defaultValue={selectorNote || "C"}
                    id="note" name="note"
                    onChange={(e) => { changeHandler(e.target.value) }}
                    onBlur={(e) => { changeHandler(e.target.value) }} >
                    <option disabled />
                    {noteSelectorOptions}
                </select>
            </label>
        </div>
    )
}

export default NoteSelector