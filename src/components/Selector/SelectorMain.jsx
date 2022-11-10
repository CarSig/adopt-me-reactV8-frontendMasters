import React, { useContext } from 'react'
import { Chord, Scale, CAGEDshapes } from "../../musicTheory";
import useMusicGrouping from '../../hooks/useMusicGrouping';
import { MusicContext } from '../../Context/MusicContext';
import NoteSelector from './NoteSelector'
import MultiSelector from './MultiSelector'

const SelectorMain = () => {
    const { handleChord, handleScale, handleShape } = useMusicGrouping();
    const { selectorType, setSelectorType, setSelectorChord, setSelectorScale, setSelectorShape } = useContext(MusicContext)



    const getButton = (selected) => {
        return (
            <button onClick={() => { setSelectorType(selected) }} style={{ backgroundColor: selectorType === selected && "#009688" }}>{selected}</button>
        )
    }

    return (
        <div className='selectorMain'>
            {getButton("chord")}
            {getButton("scale")}
            {getButton("shape")}
            {selectorType === "scale" && <SelectorCombo typeSetter={setSelectorScale} type="scale" typeInput={Scale} handleClick={handleScale} />}
            {selectorType === "chord" && <SelectorCombo typeSetter={setSelectorChord} type="chord" typeInput={Chord} handleClick={handleChord} />}
            {selectorType === "shape" && <SelectorCombo typeSetter={setSelectorShape} type="shape" typeInput={CAGEDshapes} handleClick={handleShape} />}


        </div >
    )
}




const SelectorCombo = ({ typeSetter, type, typeInput, handleClick }) => {
    const buttonName = type.charAt(0).toUpperCase() + type.slice(1)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NoteSelector type={type} />
            <MultiSelector typeSetter={typeSetter} type={type} typeInput={typeInput} />
            <button className="btn btn-select" onClick={handleClick}>get {buttonName}</button>


        </div>
    )
}

export default SelectorMain
