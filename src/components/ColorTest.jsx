import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { hexToHSL, getTheme } from '../functions/colorModificaitons';

const ColorTest = () => {

    const { primaryColor, textColor2, setColor, setPrimaryColor, color } = useContext(ThemeContext);




    const handleColorChange = () => {
        setColor(getTheme(primaryColor))
    }


    return (
        <div>

            <div style={{ backgroundColor: "white" }}>  <h1>Title</h1>
                <p style={{ color: textColor2 }}>{primaryColor}</p>
                <button style={{ backgroundColor: color.primary }}>button1</button>
                <button style={{ backgroundColor: color.secondary }}>button2</button>
                <button style={{ backgroundColor: color.tertiary }}>button3</button>
                <button style={{ backgroundColor: color.quaternary }}>button4</button>
                <button style={{ backgroundColor: color.quinary }}>button5</button>


                <form action="">
                    <input type="color" onChange={(e) => setPrimaryColor(e.target.value)} />

                </form>


                <div>
                    Dynamic

                    {
                        <button style={{ backgroundColor: "orange" }} onClick={handleColorChange}>TEST COLOR</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default ColorTest


