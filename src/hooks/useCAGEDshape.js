import { useState, useContext } from "react";
import { getCAGEDshape } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";




const useCAGEDshape = () => {
    const { shape, setShape, note, setRoot } = useContext(MusicContext)
    const [displayedShape, setDisplayedShape] = useState(false);

    const handleShape = () => {
        const CAGEDshape = getCAGEDshape(note, shape);

        setDisplayedShape(CAGEDshape);

        setShape({ frets: CAGEDshape, note, shape })
    }


    return { shape, setShape, note, setRoot, displayedShape, setDisplayedShape, getCAGEDshape, handleShape };


}



export default useCAGEDshape;