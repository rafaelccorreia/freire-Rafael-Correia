import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import imgLogo from '../img/astro_logo.png'
import matchesIcon from '../img/match_icon.svg'
import backToSwipe from '../img/back_to_swipe_icon.svg'

const BigCardContainer = styled.div`
    width: 25rem;
    height: 37.5rem;
    background-color: white;
    border-radius: 10px;
`

const Cabecalho = styled.header`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 3.125rem;
    justify-content: space-between;
    padding: 0 0.5rem;
    height: 3.125rem;
    justify-items: center;
`

const ImgLogo = styled.img`
    height: 90%;
    grid-column: 2 / span 1;
`

const ImgMatch = styled.img`
    grid-column: 3/ span 1;
    height: 80%;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`
const ImgBackS = styled.img`
    grid-column: 1/ span 1;
    height: 80%;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

const BigCard = () => {
    return (
        <BigCardContainer>
            <Cabecalho>
                <ImgBackS src={backToSwipe} />
                <ImgLogo src={imgLogo} />
                <ImgMatch src={matchesIcon} />
            </Cabecalho>
            <hr />
        </BigCardContainer>
    )
}

export default BigCard