import React, { useContext, useEffect, useState } from 'react'
import { Chord, Scale, CAGEDshapes } from "../../musicTheory";
import useChord from '../../hooks/useChord';
import useScale from '../../hooks/useScale';
import useCAGEDshape from '../../hooks/useCAGEDshape';
import { MusicContext } from '../../Context/MusicContext';
// import SelectorCombo from './SelectorCombo';
import NoteSelector from './NoteSelector'
import MultiSelector from './MultiSelector'

const SelectorMain = () => {
    const [selectedNotes, setSelectedNotes] = useState([]);
    const { setChordNote, setChordState, displayedChord, handleChord } = useChord();
    const { setScale, setScaleNote, displayedScale, handleScale } = useScale();
    const { setShape, root, setRoot, displayedShape, setDisplayedShape, getCAGEDshape } = useCAGEDshape();
    const [selector, setSelector] = useState("shape");
    const { shape } = useContext(MusicContext);





    const getButton = (selected) => {
        return (
            <button onClick={() => { setSelector(selected) }} style={{ backgroundColor: selector === selected && "red" }}>{selected}</button>
        )
    }



    return (
        <div className='selectorMain'>

            {getButton("chord")}
            {getButton("scale")}
            {getButton("shape")}




            {selector === "chord" && <SelectorCombo noteSetter={setScaleNote} typeSetter={setScale} type="scale" typeInput={Scale} handleClick={handleScale} displayed={displayedScale} />}
            {selector === "scale" && <SelectorCombo noteSetter={setChordNote} typeSetter={setChordState} type="chord" typeInput={Chord} handleClick={handleChord} displayed={displayedChord} />}
            {selector === "shape" && <SelectorCombo noteSetter={setRoot} typeSetter={setShape} type="shape" typeInput={CAGEDshapes} handleClick={getCAGEDshape} displayed={JSON.stringify(displayedShape)} />}


        </div >
    )
}




const SelectorCombo = ({ noteSetter, typeSetter, type, typeInput, handleClick, displayed }) => {
    const buttonName = type.charAt(0).toUpperCase() + type.slice(1)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NoteSelector noteSetter={noteSetter} type={type} />
            <MultiSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button className="btn btn-select" onClick={handleClick}>get {buttonName}</button>
            {displayed}
        </div>
    )
}

export default SelectorMain
