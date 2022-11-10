import React from 'react'

const MultiSelector = ({ type, typeSetter, typeInput }) => {
    const defaultValue = typeInput === "shape" ? "C" : " major"

    return (
        <div className={`chord-scale-selector ${type}`} >
            <label htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
                <select className={type} defaultValue={defaultValue}
                    id={type}
                    name={type}
                    onChange={(e) => {
                        typeSetter(e.target.value);
                    }}

                >
                    <option disabled />

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