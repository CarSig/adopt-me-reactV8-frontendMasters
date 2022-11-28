import React, { useContext, useState } from 'react'
import { CHROMATIC_SCALE } from "../../musicTheory";
import { MusicContext } from '../../Context/MusicContext';
import styled from 'styled-components';


const NoteSelect = styled.button`
width:80px;
height: 80px;
border-radius: 5px;
border: 1px solid #000;
background-color:  ${props => props.value === props.selectedNote ? "darkred" : "#444"};
color: #000;
font-size: 1.5rem;
font-weight: 600;
text-align: center;
text-align-last: center;
margin: 0 5px;
padding: 0;
outline: none;
cursor: pointer;
&:hover {
    background-color: #000;
    color: #fff;
}
`
const Wrapper = styled.section`

    .note-selector {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        background-color: #444;
        border-radius: 5px;
        border: 1px solid #000;
        padding: 0;
        margin: 0;
        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;};
            .accidental {
               
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%; };
            fieldset {
                border:none;
              background-color: #aaa;
              width:4rem;
            }       
        }
       
`;

const NoteSelector = ({ type }) => {
    const { setNote, selectorNote, setSelectorNote, note } = useContext(MusicContext);
    const { accidental, setAccidental } = useState("sharp");
    const [counter, setCounter] = useState(0);



    const changeHandler = (e) => {
        setSelectorNote(e);
        setNote(e);
        console.log(e)

    }

    const noteSelectorOptions = CHROMATIC_SCALE.map((note) => (
        <option key={note} value={note} >{note}</option>
    ))


    const formatNote = (note) => {
        if (note.length === 1) {
            return note;
        } else if
            (accidental == "sharp") {
            return note.slice(0, 1);
        } else {
            return note.slice(3, 5);
        }
    }

    return (
        <Wrapper as="div">

            <div className={`note-selector ${type} `}>
                <label htmlFor="note">
                    Note
                    <select defaultValue={selectorNote || "C"}
                        id="note" name="note"
                        onChange={(e) => { changeHandler(e.target.value) }}
                        onBlur={(e) => { changeHandler(e.target.value) }} >
                        <option disabled />
                        {noteSelectorOptions}
                    </select>
                    {

                        // radio buttons for accidental
                        <div className="accidental" >
                            <fieldset>
                                <input type="radio" id="sharp" name="accidental" value="sharp" onChange={() => { setAccidental("sharp") }} />
                                <label htmlFor="sharp">Sharp</label>
                            </fieldset>
                            <fieldset>
                                <input type="radio" id="flat" name="accidental" value="flat" onChange={() => { setAccidental("flat") }} />
                                <label htmlFor="flat">Flat</label>
                            </fieldset>
                        </div>
                    }


                </label>

                {CHROMATIC_SCALE.map((item) => (
                    <div key={item} onClick={(e) => { changeHandler(e.target.value) }}>
                        <NoteSelect selectedNote={note} value={item} key={item} onClick={(e) => { changeHandler(e) }}>{formatNote(item)}</NoteSelect>
                    </div>


                ))}


            </div>
        </Wrapper>
    )
}

export default NoteSelector