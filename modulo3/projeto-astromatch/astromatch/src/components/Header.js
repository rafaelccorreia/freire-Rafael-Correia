import styled from 'styled-components'

import imgLogo from '../img/astro_logo.png'
import matchesIcon from '../img/match_icon.svg'
import backToSwipe from '../img/back_to_swipe_icon.svg'

const Cabecalho = styled.header`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 3.125rem;
    height: 3.125rem;
    justify-content: space-between;
    justify-items: center;
    padding: 0 0.5rem;
`

const ImgLogo = styled.img`
    grid-column: 2 / span 1;
    height: 95%;
`

const ImgMatch = styled.img`
    grid-column: 3/ span 1;
    height: 90%;
    &:hover {
        cursor: pointer;
        transform: scale(0.9);
    }
`
const ImgBackS = styled.img`
    grid-column: 1/ span 1;
    height: 90%;
    &:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
`

const Header = () => {
    return (
        <Cabecalho>
            <ImgBackS src={backToSwipe} />
            <ImgLogo src={imgLogo} />
            <ImgMatch src={matchesIcon} />
        </Cabecalho>
    )
}

export default Header