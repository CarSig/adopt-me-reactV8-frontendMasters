import React from 'react'



const ChordEl = ({ displayedChord }) => {

    return (
        <div className='chord'>


            <h2 >{displayedChord}</h2>


            <p>{typeof displayedChord}</p>



        </div>
    )
}

export default ChordEl