import { useState } from "react";
import { getScale } from "../musicTheory";

const useScale = () => {
    const [scale, setScale] = useState("");
    const [scaleNote, setScaleNote] = useState("");

    const [displayedScale, setDisplayedScale] = useState(false);

    const handleScale = () => {

        const result = getScale(scaleNote, scale);

        setDisplayedScale(result);

    }

    return { scale, setScale, scaleNote, setScaleNote, displayedScale, setDisplayedScale, handleScale };
}
export default useScale;