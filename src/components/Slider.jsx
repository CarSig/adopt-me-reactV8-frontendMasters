import React, { useState } from 'react'

const Slider = ({ delay, setDelay }) => {



    // create a function that will adjsut speed,bigger number means slower
    const handleSpeed = (e) => {
        // const speedAdjustment = 250 / e.target.value;
        const adjustment = e.target.value;
        setDelay(adjustment);
    }

    return (
        <div >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "150px" }}>
                <label htmlFor="speed">delay</label>
            </div>
            <div>
                <label htmlFor="speed">-</label>
                <input type="range" min="1" max="225" value={delay} className="slider" id="delayRange" onChange={handleSpeed} />
                <label htmlFor="speed">+</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "150px" }}>
                <label htmlFor="speed">{delay}</label>
            </div>
        </div>
    )
}


export default Slider