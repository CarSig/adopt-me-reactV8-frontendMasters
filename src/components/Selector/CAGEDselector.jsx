import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { MusicContext } from '../../Context/MusicContext';
import useMusicGrouping from '../../hooks/useMusicGrouping';
import { StyledContainer } from '../../assets/styles/Container.style';
import styled from 'styled-components'

const StyledShapeSelector = styled.button`
    background-color: #333;
    color: white;
    border: none;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0.5rem;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
  
    }
`
const ShapeContainer = styled(StyledContainer)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-start;
	align-content: stretch;

`;




const CAGEDselector = () => {
    const { secondaryColor } = React.useContext(ThemeContext)
    const { setSelectorShape } = useContext(MusicContext)
    const { handleShape } = useMusicGrouping();
    const shapes = ["C", "A", "G", "E", "D"]

    const handleClick = (e) => {
        setSelectorShape(e.target.value)
        setTimeout(() => { handleShape(), 0 })

    }




    return (
        <ShapeContainer>
            {shapes.map((option) => (
                <StyledShapeSelector key={option} value={option} style={{ backgroundColor: secondaryColor }} onClick={(e) => { handleClick(e) }}>
                    {option}

                </StyledShapeSelector>
            ))}


        </ShapeContainer >
    )
}

export default CAGEDselector