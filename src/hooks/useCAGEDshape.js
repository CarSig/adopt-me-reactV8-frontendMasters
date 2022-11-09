import { useState, useContext } from "react";
import { CAGEDshapes, getCAGEDshape } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";




const useCAGEDshape = () => {
    const { shape, setShape, root, setRoot } = useContext(MusicContext)
    const [displayedShape, setDisplayedShape] = useState(false);

    const handleShape = () => {
        const result = getCAGEDshape(root, shape);
        setDisplayedShape(result);
        setShape(result)
    }


    return { shape, setShape, root, setRoot, displayedShape, setDisplayedShape, getCAGEDshape, handleShape };


}



export default useCAGEDshape;