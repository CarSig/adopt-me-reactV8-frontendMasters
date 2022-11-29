import React, { useContext } from 'react'
import { Scale } from "../../musicTheory";
import useMusicGrouping from '../../hooks/useMusicGrouping';
import { MusicContext } from '../../Context/MusicContext';

const ScaleSelector = () => {
    const { handleShape, handleScale } = useMusicGrouping();
    const defaultValue = "major"
    const { setSelectorScale } = useContext(MusicContext)

    const handleClick = (e) => {
        setSelectorScale(e.target.value)
        handleScale()
        // handleShape()
    }




    return (
        <div className='chord-scale-selector chord'>
            <label htmlFor="scale">
                Scales
                <select className="scale" defaultValue={defaultValue}
                    id="scale"
                    name="scale"
                    onChange={(e) => { handleClick(e) }}>
                    <option disabled />

                    {Object.keys(Scale).map((option) => (
                        <option key={option} className={option} value={option}>
                            {option}

                        </option>
                    ))}
                </select>

            </label>

            <button>get MODAL</button>
        </div >
    )
}

export default ScaleSelector










