import React from 'react'

const MultiSelector = ({ type, typeSetter, typeInput }) => {
    return (
        <div className={`chord-scale-selector ${type}`} >
            <label htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
                <select className={type}
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
                        <option key={option} className={type} value={option}>
                            {option}

                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default MultiSelector