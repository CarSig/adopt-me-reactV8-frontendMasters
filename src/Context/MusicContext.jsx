import { createContext, useState, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    note: "C",
    chord: {
        name: "C7diminished",
        notes: ["C", "Eb", "Gb", "Bb"]
    },
    scale: "CHrmonicminor",
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


    return (
        <MusicContext.Provider
            value={{
                chord: state.chord,
                setChord,
                note: state.note,
                setNote,
                scale: state.scale,
                setScale,
            }}>{children}</MusicContext.Provider>
    )
}


