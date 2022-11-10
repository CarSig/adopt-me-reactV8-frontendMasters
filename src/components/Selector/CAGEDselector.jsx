// import React from 'react'

// const CAGEDselector = ({ noteSetter }) => {
//     const notes = ['C', 'A', 'G', 'E', 'D']

//     const noteSelectorOptions = notes.map((option) => (
//         <option key={option} value={option}>{option}</option>
//     ))

//     return (
//         <div className='note-selector'>
//             <label htmlFor="note">
//                 Note
//                 <select
//                     id="note" name="note"
//                     onChange={(e) => { noteSetter(e.target.value) }}
//                     onBlur={(e) => { noteSetter(e.target.value) }} >
//                     {noteSelectorOptions}
//                 </select>
//             </label>
//         </div>
//     )
// }

// export default CAGEDselector