import React from 'react'

const ChordScaleSelector = ({ type, typeSetter, typeInput }) => {
    return (
        <label htmlFor={type}>
            {type}

            <select
                id={type}
                name={type}
                onChange={(e) => {
                    typeSetter(e.target.value);
                }}
                onBlur={(e) => {
                    typeSetter(e.target.value);
                }}
            >
                <option />

                {Object.keys(typeInput).map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default ChordScaleSelector