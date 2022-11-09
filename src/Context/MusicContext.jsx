import { createContext, useReducer } from "react";


const AppReducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    }

}


const initialState = {
    note: "",
    chord: "",
    scale: "",
    shape: "",
    selection: "",
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

    function setSelection(selection) {
        dispatch({
            type: "SET_Selection",
            payload: selection
        })
    }

    return (
        <MusicContext.Provider
            value={{
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
                selection: state.selection,
                setSelection
            }}>{children}</MusicContext.Provider>
    )
}


