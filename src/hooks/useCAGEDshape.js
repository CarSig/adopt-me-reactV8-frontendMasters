import { useState } from "react";
import { CAGEDshapes } from "../musicTheory";




const useCAGEDshape = () => {
    const [shape, setShape] = useState({});
    const [root, setRoot] = useState("");
    const [displayedShape, setDisplayedShape] = useState(false);


    const getCAGEDshape = () => {
        const fretDelays = { C: 0, "C#": 1, "D♭": 1, D: 2, "D#": 3, "E♭": 3, E: 4, F: 5, "F#": 6, "G♭": 6, G: 7, "G#": 8, "A♭": 8, A: 9, "A#": 10, "B♭": 10, B: 11 };
        const shapeCAGED = { 6: null, 5: null, 4: null, 3: null, 2: null, 1: null };
        const fretDelay = fretDelays[root];
        console.log(CAGEDshapes[root]);
        for (let guitarString in CAGEDshapes[root]) {
            if (CAGEDshapes[root][guitarString] !== null) {
                shapeCAGED[guitarString] = CAGEDshapes[root][guitarString] + fretDelay;
            }
        }

        setShape(shapeCAGED);
        setDisplayedShape(shapeCAGED);
    }

    return { shape, setShape, root, setRoot, displayedShape, setDisplayedShape, getCAGEDshape };


}



export default useCAGEDshape;