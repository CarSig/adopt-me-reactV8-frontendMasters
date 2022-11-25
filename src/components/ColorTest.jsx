import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { hexToHSL, themeAnalogue, theme2 } from '../functions/colorModificaitons';


const ColorTest = () => {

    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor, textColor, textColor2, textColor3, backgroundColor, backgroundColor2, backgroundColor3, setColor, setPrimaryColor, setColorSchema, quinaryColor } = useContext(ThemeContext);
    const [testColor, setTestColor] = useState("red")







    const modifyColor = (color) => {
        console.log(color)
        const hsl = hexToHSL(color)
        console.log(hsl)

    }




    const handleColorChange = () => {
        // console.log(modifyColor(primaryColor))
        // setTestColor((modifyColor(primaryColor)))
        setColorSchema(theme2(primaryColor))

    }


    return (
        <div>

            <div style={{ backgroundColor: backgroundColor }}>  <h1>Title</h1>

                <p style={{ color: textColor2 }}>{primaryColor}</p>

                <button style={{ backgroundColor: primaryColor }}>button1</button>
                <button style={{ backgroundColor: secondaryColor }}>button2</button>
                <button style={{ backgroundColor: tertiaryColor }}>button3</button>
                <button style={{ backgroundColor: quaternaryColor }}>button4</button>
                <button style={{ backgroundColor: quinaryColor }}>button5</button>
                <input type="color" onChange={(e) => setPrimaryColor(e.target.value)} />

                <div>
                    Dynamic

                    {
                        <button style={{ backgroundColor: testColor }} onClick={handleColorChange}>TEST COLOR</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default ColorTest


