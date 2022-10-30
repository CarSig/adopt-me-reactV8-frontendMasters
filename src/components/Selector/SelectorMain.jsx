import React, { useState } from 'react'
import NoteSelector from './NoteSelector';
import ChordSelector from './ChordSelector';
import { CHROMATIC_SCALE, SCALE_INTERVALS, Chord, Scale, getScale } from "../../musicTheory";




const SelectorMain = () => {
    const [note, setNote] = useState("");

    return (
        <div className='selectorMain'>




            <div>



                <label htmlFor="chord">
                    Chord

                    <select
                        id="chord"
                        name="chord"
                        onChange={(e) => {
                            setNote(e.target.value);
                        }}
                        onBlur={(e) => {
                            setNote(e.target.value);
                        }}
                    >
                        <option />

                        {Object.keys(Chord).map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>






            </div>
            <label htmlFor="note">
                Note

                <select
                    id="note"
                    name="note"
                    onChange={(e) => {
                        setNote(e.target.value);
                    }}
                    onBlur={(e) => {
                        setNote(e.target.value);
                    }}
                >
                    <option />

                    {CHROMATIC_SCALE.map((note) => (
                        <option key={note} value={note}>
                            {note}
                        </option>
                    ))}
                </select>
            </label>


        </div>
    )
}


export default SelectorMain