import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const initialState = {

    primaryColor: "orange",
    color: {
        primary: "orange",
        secondary: "blue",
        tertiary: "green",
        quaternary: "purple",
        quinary: "yellow",


    }

}

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);


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
            color: state.color,
            setColor, setColorSchema, setPrimaryColor
        }}>
            {children}
        </ThemeContext.Provider>
    )
}