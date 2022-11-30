/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react'
import { useChordInterval } from '../hooks/useChordInterval';
import { MusicContext } from '../Context/MusicContext'
import { getIntervalColor } from '../functions/getIntervalColor';
import { playChord } from '../functions/playNotes';

import styled from 'styled-components';

const StyledFret = styled.button`
    position:relative;
    width:5rem;
    background-color: #333;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    border-right: 1px solid white;
    border-left: 1px solid white;
    border-top: none;
    border-bottom: none;
    z-index:0;
 
    :after{
        top:50%; 
         border-top:1px solid white; 
        
        left: 0;
        top: 50%;
        height: 1px;
        /* background: white; */
        content: "";
        width: 100%;
        position: absolute;
        display: block;
    z-index:-2;
            
        } 
       


    .note {
        
      
        
    }

  
`
const StyledNote = styled.div`
  color: black;
        border: none;
        z-index:5;
        background-color: #333;
/**extra */
        position: absolute; 
    top:25%;
    left:25%;
    z-index:-12;
    .note-selected {
        border: 1px solid white;
    }
    `

/* width: ${props => props.fret.fretWidth * 3.4}rem; */




const Fret = ({ fret, octave, stringNumber }) => {
    const { accidental, selectorNote, } = useContext(MusicContext);
    const { selected, interval } = useChordInterval(fret, stringNumber);

    const [playNote,] = useState([null, null, null, null, null, null])

    const selectPlayNote = (stringNumber) => {
        const newPlayNotes = playNote.map((note, index) => {
            if (index === stringNumber - 1) {
                return fret.fretNumber
            }
            return note
        })
        return newPlayNotes.reverse()
    }
    // const noteToPlay = usePlayNote(stringNumber, fret)


    const handleClick = () => {

        playChord(selectPlayNote(stringNumber))


    }




    const colors = getIntervalColor(interval)
    const formatedNote = accidental === "sharp" ? fret.fretNote?.slice(0, 2) : fret.fretNote?.slice(3, 5)


    return (


        // eslint-disable-next-line jsx-a11y/click-events-have-key-events

        <StyledFret>
            {
                //note-selected daje bijeli border
            }

            <StyledNote className={`note ${selectorNote === fret.fretNote ? "note-selected" : null}`} style={{ backgroundColor: selected && colors, color: selected ? "#eee" : "#555", "zIndex": -1 }}>
                {fret?.fretNote?.length < 2 ? fret.fretNote : formatedNote}
                {octave}


            </StyledNote>
        </StyledFret>


    )
}

export default Fret


