import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    note: "",
    chord: "",
    scale: "",
    shape: "",
    selectorType: "chord",
    selectorChord: "major",
    selectorScale: "major",
    selectorNote: "C",
    selectorShape: "C",
    fretsActive: {
        1: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },
        2: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },
        3: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },
        4: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },
        5: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },
        6: {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false,
            15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false
        },

    }

}

export const MusicContext = createContext(initialState);

export const MusicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setNote(note) {
        dispatch({
            type: "SET_NOTE",
            payload: note
        })
    }

    function setChord(chord) {
        dispatch({
            type: "SET_CHORD",
            payload: chord
        })
    }

    function setScale(scale) {
        dispatch({
            type: "SET_SCALE",
            payload: scale
        })
    }

    function setShape(shape) {
        dispatch({
            type: "SET_SHAPE",
            payload: shape
        })
    }
    function setRoot(root) {
        dispatch({
            type: "SET_ROOT",
            payload: root
        })
    }

    function setSelector(selector) {
        dispatch({
            type: "SET_SELECTOR",
            payload: selector
        })
    }
    function setSelectorChord(chord) {
        dispatch({
            type: "SET_SELECTOR_CHORD",
            payload: chord
        })
    }
    function setSelectorScale(scale) {
        dispatch({
            type: "SET_SELECTOR_SCALE",
            payload: scale
        })
    }
    function setSelectorNote(note) {
        dispatch({
            type: "SET_SELECTOR_NOTE",
            payload: note
        })
    }
    function setSelectorType(type) {
        dispatch({
            type: "SET_SELECTOR_TYPE",
            payload: type
        })
    }
    function setSelectorShape(shape) {
        dispatch({
            type: "SET_SELECTOR_SHAPE",
            payload: shape
        })
    }
    function setFretsActive(fretsActive) {
        dispatch({
            type: "SET_FRETS_ACTIVE",
            payload: fretsActive
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
            , selectorChord: state.selectorChord,
            setSelectorChord,
            selectorScale: state.selectorScale,
            setSelectorScale,
            selectorNote: state.selectorNote,
            setSelectorNote,
            selectorType: state.selectorType,
            setSelectorType
            , selectorShape: state.selectorShape,
            setSelectorShape
            , fretsActive: state.fretsActive,
            setFretsActive

        }}>{children}</MusicContext.Provider>
    )
}


