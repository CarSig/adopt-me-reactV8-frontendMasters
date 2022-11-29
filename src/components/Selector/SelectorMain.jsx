import React, { useState } from 'react'
import NoteSelector from './NoteSelector'
import ChordSelector from './ChordSelector'
import CAGEDselector from "./CAGEDselector"
import styled from 'styled-components'
import ScaleSelector from './ScaleSelector'

const StyledRow2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #444;
    color: #fff;
    padding: 0;
    margin: 0 20%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;`


const SelectorMain = () => {





    const [song, setSong] = useState([]);



    return (
        <div className='selectorMain'>

            <NoteSelector />
            <StyledRow2>
                <ChordSelector type="chord" />
                <ScaleSelector />
                <CAGEDselector />
            </StyledRow2>




            {

                // <div>
                // <MultiSelector typeSetter={setSelectorChord} type={"chord"} typeInput={Chord} handleClick={handleChord} getChord={handleShape} /></div>
                // selectorType === "scale" && (
                //     <div>            <MultiSelector typeSetter={setSelectorScale} type={"scale"} typeInput={Scale} handleClick={handleScale} />
                //     </div>

                // )
            }

        </div >
    )
}





export default SelectorMain
