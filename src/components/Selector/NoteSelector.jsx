import React from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";

const NoteSelector = ({ noteSetter }) => {
    const noteSelectorOptions = CHROMATIC_SCALE.map((option) => (
        <option key={option} value={option}>{option}</option>
    ))

    return (
        <div className=''>
            <label htmlFor="note">
                Note
                <select
                    id="note" name="note"
                    onChange={(e) => { noteSetter(e.target.value) }}
                    onBlur={(e) => { noteSetter(e.target.value) }} >
                    {noteSelectorOptions}
                </select>
            </label>
        </div>
    )
}

export default NoteSelector