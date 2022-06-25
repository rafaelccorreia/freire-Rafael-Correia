import React from 'react'
import styled from 'styled-components'

import iconLabe from '../assets/img/songs_icon.png'

const RopadeContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: linear-gradient(to right, purple, white);
    border-top: 2px solid purple;
    max-height: 7rem;
`

const RodapeLogo = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
`

const RodapeImg = styled.img`
    width: 6rem;
`

class Rodape extends React.Component {
    render() {
        return (
            <RopadeContainer>
                <RodapeLogo>Labefy</RodapeLogo>
                <RodapeImg src={iconLabe} />
            </RopadeContainer>
        )
    }
}

export default Rodape