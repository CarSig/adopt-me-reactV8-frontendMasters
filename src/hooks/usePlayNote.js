import { useState } from "react"

export const usePlayNote = ({ stringNumber, fret }) => {
    const [playNote, setPlayNote] = useState([null, null, null, null, null, null])


    const selectPlayNote = () => {
        const newPlayNotes = playNote.map((note, index) => {
            if (index === stringNumber - 1) {
                return fret.fretNumber
            }
            return note
        })



        return newPlayNotes.reverse()
    }
    setPlayNote(selectPlayNote())
    console.log(playNote)
    return playNote
}