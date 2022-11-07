import React, { useEffect, useState } from 'react'
import { Chord, Scale, CAGEDshapes } from "../../musicTheory";
import useChord from '../../hooks/useChord';
import useScale from '../../hooks/useScale';
import useCAGEDshape from '../../hooks/useCAGEDshape';

import SelectorCombo from './SelectorCombo';

const SelectorMain = () => {
    const [selectedNotes, setSelectedNotes] = useState([]);
    const { setChordNote, setChordState, displayedChord, handleChord } = useChord();
    const { setScale, setScaleNote, displayedScale, handleScale } = useScale();
    const { shape, setShape, root, setRoot, displayedShape, setDisplayedShape, getCAGEDshape } = useCAGEDshape();
    const [selector, setSelector] = useState("shape");

    useEffect(() => {
        setSelectedNotes(displayedChord)
        console.log(selectedNotes)
    }, [displayedChord]);
    useEffect(() => {
        setSelectedNotes(displayedScale)
        console.log(selectedNotes)
    }, [displayedScale]);
    useEffect(() => {
        setSelectedNotes(displayedShape)
        console.log(selectedNotes)
    }, [displayedShape]);

    return (
        <div className='selectorMain'>
            <button onClick={() => { setSelector("chord") }}>Chord</button>
            <button onClick={() => { setSelector("scale") }}>Scale</button>
            <button onClick={() => { setSelector("shape") }}>Shape</button>



            {selector === "chord" && <SelectorCombo noteSetter={setScaleNote} typeSetter={setScale} type="scale" typeInput={Scale} handleClick={handleScale} displayed={displayedScale} />}
            {selector === "scale" && <SelectorCombo noteSetter={setChordNote} typeSetter={setChordState} type="chord" typeInput={Chord} handleClick={handleChord} displayed={displayedChord} />}
            {selector === "shape" && <SelectorCombo noteSetter={setRoot} typeSetter={setShape} type="shape" typeInput={CAGEDshapes} handleClick={getCAGEDshape} displayed={JSON.stringify(displayedShape)} />}


        </div>
    )
}

export default SelectorMain