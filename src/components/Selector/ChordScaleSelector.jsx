import React from 'react'

const ChordScaleSelector = ({ type, typeSetter, typeInput }) => {
    return (
        <div className='chord-scale-selector'>
            <label htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
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
        </div>
    )
}

export default ChordScaleSelector