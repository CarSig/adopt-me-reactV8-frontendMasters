import styled from "styled-components";

export const NoteButton = styled.button`
width:80px;
height: 50px;
border-radius: 5px;
border: 1px solid #000;
background-color:  ${props => props.value === props.selectedNote ? "#222" : "#555"};
color: #ccc;
font-size: 1.5rem;
font-weight: 600;
cursor: pointer;
&:hover {
    background-color: #777;
    color: #fff;
    background-color:  ${props => props.value === props.selectedNote ? "#222" : "#777"};
}

`
export const SelectorWrapper = styled.section`
display: flex;
flex-direction: row;
margin: auto  10%;
 

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
export const StyledRadioGroup = styled.div`
   display: flex;
background-color: #aaa;
grid:1;
flex-basis:10%;
/* margin: 0.5rem; */
border: 6px solid #555;
justify-content: center;
align-items: center;
`;