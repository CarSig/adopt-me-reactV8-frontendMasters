import { useContext } from "react";
import { getScale, getCAGEDshape, Chord } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";

const useMusicGrouping = () => {
    const { setScale, selectorScale, selectorNote, setChord, selectorChord, selectorShape, setShapeCoordinates, playNotes, setPlayNotes } = useContext(MusicContext);


    const handleScale = () => {
        const notes = getScale(selectorNote, selectorScale);
        const name = selectorNote + " " + selectorScale;
        setScale({ name, notes })
    }

    const handleChord = () => {
        console.log(selectorChord)
        const notes = Chord[`${selectorChord}`](selectorNote)

        const name = selectorNote + " " + selectorChord;
        setChord({ name, notes });
    };


    const handleShape = () => {
        const CAGEDshape = getCAGEDshape(selectorNote, selectorShape);
        setShapeCoordinates(CAGEDshape);
        const notes = []
        for (let note in CAGEDshape) {
            notes.push(CAGEDshape[note])
        }
        setPlayNotes(notes)
        // console.log(playNotes.reverse(), "s")

    }
    return { handleScale, handleChord, handleShape };
}


export default useMusicGrouping;













