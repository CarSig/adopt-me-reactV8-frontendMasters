import React, { useEffect, useState } from 'react'
import { Chord, Scale } from "../../musicTheory";
import useChord from '../../hooks/useChord';
import useScale from '../../hooks/useScale';

import SelectorCombo from './SelectorCombo';

const SelectorMain = () => {
    const [selectedNotes, setSelectedNotes] = useState([]);
    const { setChordNote, setChordState, displayedChord, handleChord } = useChord();
    const { setScale, setScaleNote, displayedScale, handleScale } = useScale();

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
        </div>
    )
}

export default SelectorMain