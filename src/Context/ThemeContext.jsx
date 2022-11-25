import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const initialState = {
    primaryColor: "orange",
    secondaryColor: "blue",
    tertiaryColor: "green",
    quaternaryColor: "purple",
    quinaryColor: "yellow",
    textColor: "#333",
    textColor2: "black",

    backgroundColor: "white",
    backgroundColor2: "black",

}

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);


    console.log(state)

    function setColorSchema(colorSchema) {
        dispatch({
            type: "SET_COLOR_SCHEMA",
            payload: colorSchema
        })
    }


    function setColor(color) {
        dispatch({
            type: "SET_COLOR",
            payload: color
        })
    }

    function setPrimaryColor(color) {
        dispatch({
            type: "SET_PRIMARY_COLOR",
            payload: color
        })
    }


    return (
        <ThemeContext.Provider value={{
            primaryColor: state.primaryColor,
            secondaryColor: state.secondaryColor,
            tertiaryColor: state.tertiaryColor,
            quaternaryColor: state.quaternaryColor,
            quinaryColor: state.quinaryColor,
            textColor: state.textColor,
            textColor2: state.textColor2,

            backgroundColor: state.backgroundColor,
            backgroundColor2: state.backgroundColor2,

            setColor, setColorSchema, setPrimaryColor
        }}>
            {children}
        </ThemeContext.Provider>
    )
}