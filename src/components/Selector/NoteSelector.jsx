import React, { useContext } from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";
import { MusicContext } from '../../Context/MusicContext';
import { NoteButton, SelectorWrapper } from '../../assets/styles/Selector.style';
import { formatNote } from './functions/selectorFunctions';
import RadioGroup from './elements/RadioGroup';
import useMusicGrouping from '../../hooks/useMusicGrouping';

const NoteSelector = ({ type }) => {
    const { setNote, setSelectorNote, note, accidental, setAccidental } = useContext(MusicContext);
    const { handleShape } = useMusicGrouping();
    const changeHandler = async (e) => {
        setNote(e);
        setSelectorNote(e);
  
        // setTimeout(() => { handleShape(), 1 })
        await handleShape()

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