import React from 'react'




const Fret = ({ fret }) => {

    const styles = {

        width: `${fret.fretWidth * 27}px`,
        height: "30px",
        backgroundColor: 'white',
        border: '1px solid black',
        justifyText: "center",
        textAlign: "center",

    }

    return (

        <div style={styles}>{fret?.fretNote?.length < 2 ? fret.fretNote : "*"}</div>
    )
}

export default Fret


