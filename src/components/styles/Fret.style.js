import styled from 'styled-components';
import { getIntervalColor } from '../../functions/getIntervalColor';

export const StyledFret = styled.button`
    position:relative;
    width:5rem;
    background-color: #333;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    border-right: 2px solid #444;
    border-left: 2px solid  #444;
    border-top: none;
    border-bottom: none;
    z-index:0;
     :after{
        top:50%; 
        border-top:1px solid white; 
        border-top:${props => props.stringNumber < 4 ? "1px" : "2px"}  solid #ccc; 
     
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
 
`
export const StyledNote = styled.div`
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


