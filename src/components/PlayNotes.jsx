import React from 'react'

// map note frequencies , input note and octave







const PlayNotes = () => {
    var context = new AudioContext();
    var o = null;
    var g = null;
    function playNote(frequency, type) {
        setTimeout(function () {
            o = context.createOscillator();
            g = context.createGain();
            o.type = type;
            o.connect(g);
            o.frequency.value = frequency;
            g.connect(context.destination);
            o.start(0);
            g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
        }, 1000);
    }





    const getNote = (note, octave) => {
        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const noteIndex = notes.indexOf(note);
        const noteFreq = 440 * Math.pow(2, (noteIndex - 9) / 12);
        const octaveFreq = Math.pow(2, octave - 4);
        console.log(noteFreq * octaveFreq)
        return noteFreq * octaveFreq;

    }

    return (
        <div><h1>Play Notes</h1>

            <button onClick={() => { playNote(getNote("C", 4), "sine") }}>C</button>
            <button onClick={() => { playNote(getNote("D", 4), "sine") }}>D</button>
            <button onClick={() => { playNote(getNote("E", 4), "sine") }}>E</button>
            <button onClick={() => { playNote(getNote("F", 4), "sine") }}>F</button>
            <button onClick={() => { playNote(getNote("G", 4), "sine") }}>G</button>
            <button onClick={() => { playNote(146.8, "sine") }}>D</button>
            <button onClick={() => { playNote(164.8, "sine") }}>E</button>
            <button onClick={() => { playNote(174.6, "sine") }}>F</button>
            <button onClick={() => { playNote(196.0, "sine") }}>G</button>
            <button onClick={() => { playNote(1047, "square") }}>square</button>
            <button onClick={() => { playNote(1047, "triangle") }}>triangle</button>
            <button onClick={() => { playNote(1047, "sawtooth") }}>sawtooth</button>
        </div>
    )
}

export default PlayNotes