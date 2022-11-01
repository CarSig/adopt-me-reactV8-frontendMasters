import React from 'react'
import NoteSelector from './NoteSelector'
import ChordScaleSelector from './ChordScaleSelector'

const SelectorCombo = ({ noteSetter, typeSetter, type, typeInput, handleClick, displayed }) => {
    return (
        <div>
            <NoteSelector noteSetter={noteSetter} />
            <ChordScaleSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button onClick={handleClick}>Scale</button>
            {displayed}
        </div>
    )
}

export default SelectorCombo