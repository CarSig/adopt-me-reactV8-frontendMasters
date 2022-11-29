import React from 'react'
import { StyledRadioGroup } from '../../../assets/styles/Selector.style'







const RadioGroup = ({ value, hook, items }) => {
    return (
        <StyledRadioGroup>
            {
                items.map((item) => (
                    <div key={item}>
                        <input type="radio" id={item} name={item} value={item} checked={value === item} onChange={(e) => hook(e.target.value)} />
                        <label htmlFor={item}>{item}</label>

                    </div>
                ))

            }




        </StyledRadioGroup>
    )
}

export default RadioGroup