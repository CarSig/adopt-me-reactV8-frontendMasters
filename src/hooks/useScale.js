import { useState, useContext } from "react";
import { getScale } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";

const useScale = () => {
    // const [scale, setScale] = useState("");
    const [scaleNote, setScaleNote] = useState("");
    const { note, setScale, scale } = useContext(MusicContext);

    const [displayedScale, setDisplayedScale] = useState(false);

    const handleScale = () => {

        const notes = getScale(scaleNote, scale);

        const name = scaleNote + " " + scale;





        setDisplayedScale(notes);
        setScale({ name, notes })

    }

    return { scale, setScale, scaleNote, setScaleNote, displayedScale, setDisplayedScale, handleScale };
}
export default useScale;
