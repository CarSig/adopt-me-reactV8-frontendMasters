import React from 'react'
import NoteSelector from './NoteSelector'
import MultiSelector from './MultiSelector'

const SelectorCombo = ({ noteSetter, typeSetter, type, typeInput, handleClick, displayed }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NoteSelector noteSetter={noteSetter} type={type} />
            <MultiSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button className="btn btn-select" onClick={handleClick}>{type.charAt(0).toUpperCase() + type.slice(1)}</button>
            {displayed}
        </div>
    )
}

export default SelectorCombo