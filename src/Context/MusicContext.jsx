import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    note: "",
    chord: "",
    scale: "",
    shape: "",
    selector: "shape",
}

export const MusicContext = createContext(initialState);

export const MusicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setNote(note) {
        dispatch({
            type: "note",
            payload: note
        })
    }

    function setChord(chord) {
        dispatch({
            type: "chord",
            payload: chord
        })
    }

    function setScale(scale) {
        dispatch({
            type: "scale",
            payload: scale
        })
    }

    function setShape(shape) {
        dispatch({
            type: "shape",
            payload: shape
        })
    }
    function setRoot(root) {
        dispatch({
            type: "root",
            payload: root
        })
    }

    function setSelector(selector) {
        dispatch({
            type: "selector",
            payload: selector
        })
    }

    return (
        <MusicContext.Provider value={{
            chord: state.chord,
            setChord,
            note: state.note,
            setNote,
            scale: state.scale,
            setScale,
            shape: state.shape,
            setShape,
            root: state.root,
            setRoot,
            selector: state.selector,
            setSelector
        }}>{children}</MusicContext.Provider>
    )
}


