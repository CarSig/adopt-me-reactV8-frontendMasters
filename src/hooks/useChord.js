import { useState, useContext } from "react";
import { Chord } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";

const useChord = () => {
    const { setChord, chord, note } = useContext(MusicContext);
    const [chordNote, setChordNote] = useState("");
    const [chordState, setChordState] = useState("");
    const [displayedChord, setDisplayedChord] = useState(false);

    const handleChord = () => {
        console.log("chordNote", chordNote || note);
        const chordType = chord || "major"
        const chordRoot = chordNote || "C";
        const notes = Chord[chordType](chordRoot)
        const name = chordNote + " " + chordState;
        setDisplayedChord(notes);
        setChord({ name, notes });
    };

    return { chord, setChord, chordNote, setChordNote, chordState, setChordState, displayedChord, setDisplayedChord, handleChord };
}

export default useChord;