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

    useEffect(() => {
        setSelectedNotes(displayedChord)
    }, [displayedChord]);
    useEffect(() => {
        setSelectedNotes(displayedScale)
    }, [displayedScale]);


    return (
        <div className='selectorMain'>
            <SelectorCombo noteSetter={setScaleNote} typeSetter={setScale} type="scale" typeInput={Scale} handleClick={handleScale} displayed={displayedScale} />
            <SelectorCombo noteSetter={setChordNote} typeSetter={setChordState} type="chord" typeInput={Chord} handleClick={handleChord} displayed={displayedChord} />
            <SelectorCombo noteSetter={setChordNote} typeSetter={setShape} type="shape" typeInput={CAGEDshapes} handleClick={getCAGEDshape} displayed={displayedChord} />
        </div>
    )
}

export default SelectorMain