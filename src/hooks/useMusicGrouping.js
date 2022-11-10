import { useContext } from "react";
import { getScale, getCAGEDshape, Chord } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";

const useMusicGrouping = () => {
    const { setScale, selectorScale, selectorNote, setChord, selectorChord, setShape, selectorShape } = useContext(MusicContext);

    const handleScale = () => {
        const notes = getScale(selectorNote, selectorScale);
        const name = selectorNote + " " + selectorScale;
        setScale({ name, notes })
    }

    const handleChord = () => {
        const notes = Chord[selectorChord](selectorNote)
        const name = selectorNote + " " + selectorChord;
        setChord({ name, notes });
    };

    const handleShape = () => {
        const CAGEDshape = getCAGEDshape(selectorNote, selectorShape);
        setShape({ frets: CAGEDshape, selectorNote, selectorShape })
    }
    return { handleScale, handleChord, handleShape };
}
export default useMusicGrouping;













