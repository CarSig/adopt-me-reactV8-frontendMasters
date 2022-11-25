import React from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const MultiSelector = ({ type, typeSetter, typeInput }) => {
    const { primaryColor, secondaryColor } = React.useContext(ThemeContext)
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
                    style={{ backgroundColor: primaryColor }}>



                    {Object.keys(typeInput).map((option) => (
                        <option key={option} className={type} value={option} style={{ backgroundColor: secondaryColor }}>
                            {option}

                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default MultiSelector