import React from 'react'
import "./circle.scss"


const Circle = () => {
    const circleOfFifthNotes = ["C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#", "F"];
    return (
        <div>

            <ul className='pie'>
                <li className='slice'>
                    <div className='slice-contents'><p>ff</p></div>
                </li>


            </ul>








            {circleOfFifthNotes.map((note) => (
                <div key={note} >
                    <div className="text">{note}</div>


                </div>
            ))}








        </div >
    )
}

export default Circle