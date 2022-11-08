import { createContext, useState, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    note: "A",
    chord: {
        name: "C7diminished",
        notes: ["C", "Eb", "Gb", "Bb"]
    },
    scale: "CHrmonicminor",
    shape: { "1": 2, "2": 3, "3": 1, "4": 2, "5": null, "6": null },
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
                setShape
            }}>{children}</MusicContext.Provider>
    )
}


