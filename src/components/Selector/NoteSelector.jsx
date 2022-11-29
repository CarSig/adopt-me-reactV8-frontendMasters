import React, { useContext, useState } from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";
import { MusicContext } from '../../Context/MusicContext';
import { NoteButton, SelectorWrapper } from '../../assets/styles/Selector.style';
import { formatNote } from './functions/selectorFunctions';
import RadioGroup from './elements/RadioGroup';
import useMusicGrouping from '../../hooks/useMusicGrouping';

const NoteSelector = ({ type }) => {
    const { setNote, selectorNote, setSelectorNote, note, accidental, setAccidental } = useContext(MusicContext);
    // const [accidental, setAccidental] = useState("sharp");
    const { handleShape } = useMusicGrouping();

    const changeHandler = (e) => {
        setSelectorNote(e);
        setNote(e);
        setTimeout(() => { handleShape(), 0 })
    }



    return (
        <SelectorWrapper>

            <RadioGroup value={accidental} hook={setAccidental} items={["sharp", "flat"]} />
            <div className={`note-selector ${type} `}>




                {CHROMATIC_SCALE.map((item) => (
                    <NoteButton selectedNote={note} value={item} key={item} onClick={(e) => { changeHandler(e.target.value) }}>{formatNote(item, accidental)}</NoteButton>
                ))}


            </div>
        </SelectorWrapper >
    )
}

export default NoteSelector