import React from 'react'
import NoteSelector from './NoteSelector'
import ChordScaleSelector from './ChordScaleSelector'

const SelectorCombo = ({ noteSetter, typeSetter, type, typeInput, handleClick, displayed }) => {
    return (
        <div>
            <NoteSelector noteSetter={noteSetter} type={type} />
            <ChordScaleSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button onClick={handleClick}>{type.charAt(0).toUpperCase() + type.slice(1)}</button>
            {displayed}
        </div>
    )
}

export default SelectorCombo