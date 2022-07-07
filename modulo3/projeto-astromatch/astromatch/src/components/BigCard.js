import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Header from './Header'
import SmallCard from './SmallCard'

const BigCardContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 40rem;
    width: 27rem;
`

const BigCard = () => {
    return (
        <BigCardContainer>
            <Header />
            <hr />
            <SmallCard />
        </BigCardContainer>
    )
}

export default BigCard