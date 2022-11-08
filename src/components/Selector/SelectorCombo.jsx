import React from 'react'
import NoteSelector from './NoteSelector'
import MultiSelector from './MultiSelector'

const SelectorCombo = ({ noteSetter, typeSetter, type, typeInput, handleClick, displayed }) => {
    const buttonName = type.charAt(0).toUpperCase() + type.slice(1)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NoteSelector noteSetter={noteSetter} type={type} />
            <MultiSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button className="btn btn-select" onClick={handleClick}>{buttonName}</button>
            {displayed}
        </div>
    )
}

export default SelectorCombo