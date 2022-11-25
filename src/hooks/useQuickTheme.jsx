
// import { useState, createContext } from 'react'

// const initialState = {
//     primaryColor: "orange",
//     secondaryColor: "blue",
//     tertiaryColor: "green",
//     quaternaryColor: "purple",
//     textColor: "#333",
//     textColor2: "black",
//     textColor3: "white",
//     backgroundColor: "white",
//     backgroundColor2: "black",
//     backgroundColor3: "white",
// }

// export const QuickThemeContext = createContext(initialState);

// export const QuickThemeContextProvider = ({ children }) => {
//     const [state, setState] = useState(initialState)





//     export const useQuickTheme = (color, colorSchema) => {
//         const [theme, setTheme] = useState({})

//         let r = parseInt(color.substring(1, 3), 16);
//         let g = parseInt(color.substring(3, 5), 16);
//         let b = parseInt(color.substring(5, 7), 16);

//         //   const transforHextoRGB = (hex) => {
//         //     let r = parseInt(hex.substring(1, 3), 16);
//         //     let g = parseInt(hex.substring(3, 5), 16);
//         //     let b = parseInt(hex.substring(5, 7), 16);
//         //     return `rgb(${r},${g},${b})`





//         const getMonochromaticColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getAnalogousColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getComplementaryColor = (modifier) => {
//             let r2 = 255 - r + modifier;
//             let g2 = 255 - g + modifier;
//             let b2 = 255 - b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getSplitComplementaryColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getTriadicColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getSquareColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }

//         const getRectangleColor = (modifier) => {
//             let r2 = r + modifier;
//             let g2 = g + modifier;
//             let b2 = b + modifier;
//             // return "#" + r2.toString(16) + g2.toString(16) + b2.toString(16);
//             return `rgb(${r2},${g2},${b2})`
//         }



//         const getColors = () => {
//             let colors = {};
//             switch (colorSchema) {
//                 case "monochromatic":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getMonochromaticColor(50),
//                         tertiary: getMonochromaticColor(100),
//                         quaternary: getMonochromaticColor(150),
//                         background: getMonochromaticColor(200),
//                         background2: getMonochromaticColor(250),
//                         text: getMonochromaticColor(-50),
//                         text2: getMonochromaticColor(-100)

//                     }
//                     break;
//                 case "analogous":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getAnalogousColor(50),
//                         tertiary: getAnalogousColor(100),
//                         quaternary: getAnalogousColor(150),
//                         background: getAnalogousColor(200),
//                         background2: getAnalogousColor(250),
//                         text: getAnalogousColor(-50),
//                         text2: getAnalogousColor(-100)
//                     }
//                     break
//                 case "complementary":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getComplementaryColor(50),
//                         tertiary: getComplementaryColor(100),
//                         quaternary: getComplementaryColor(150),
//                         background: getComplementaryColor(200),
//                         background2: getComplementaryColor(250),
//                         text: getComplementaryColor(-50),
//                         text2: getComplementaryColor(-100)
//                     }
//                     break;
//                 case "split-complementary":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getSplitComplementaryColor(50),
//                         tertiary: getSplitComplementaryColor(100),
//                         quaternary: getSplitComplementaryColor(150),
//                         background: getSplitComplementaryColor(200),
//                         background2: getSplitComplementaryColor(250),
//                         text: getSplitComplementaryColor(-50),
//                         text2: getSplitComplementaryColor(-100)
//                     }
//                     break;
//                 case "triadic":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getTriadicColor(50),
//                         tertiary: getTriadicColor(100),
//                         quaternary: getTriadicColor(150),
//                         background: getTriadicColor(200),
//                         background2: getTriadicColor(250),
//                         text: getTriadicColor(-50),
//                         text2: getTriadicColor(-100)
//                     }
//                     break;
//                 case "square":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getSquareColor(50),
//                         tertiary: getSquareColor(100),
//                         quaternary: getSquareColor(150),
//                         background: getSquareColor(200),
//                         background2: getSquareColor(250),
//                         text: getSquareColor(-50),
//                         text2: getSquareColor(-100)
//                     }
//                     break;
//                 case "rectangle":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: getRectangleColor(50),
//                         tertiary: getRectangleColor(100),
//                         quaternary: getRectangleColor(150),
//                         background: getRectangleColor(200),
//                         background2: getRectangleColor(250),
//                         text: getRectangleColor(-50),
//                         text2: getRectangleColor(-100)
//                     }
//                     break;


//                 case "default":
//                     colors = {
//                         primary: `rgb(${r},${g},${b})`,
//                         secondary: "green",
//                         tertiary: "blue",
//                         quaternary: "yellow",
//                         background: "white",
//                         background2: "black",
//                         text: "black",
//                         text2: "#a33513"


//                     }

//                     break;
//             }
//             console.log(colors)
//             return colors
//         }

//         const colors = getColors()
//         console.log(colors)
//         // console.log("theme", theme)
//         // setTheme(getColors)
//         // console.log("theme", theme)





//         // return { colors }

//         //return ThemeContext.Provider





//     }








