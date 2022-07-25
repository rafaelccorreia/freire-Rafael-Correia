import React, {useState} from 'react'
import styled from 'styled-components'

import Header from './Header'
import SmallCard from './SmallCard'
import MatchLista from './MatchLista'

const BigCardContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    min-height: 40rem;
    width: 27rem;
`

const BigCard = () => {
    const [tela, setTela] = useState('Tela inicial')
    
    let telaElemento
    const handleTrocaTela = () => {
        if(tela === 'Tela inicial') {
            setTela('Tela matches')
        } else {
            setTela('Tela inicial')
        }
    }

    if(tela === 'Tela inicial') {
        telaElemento = <SmallCard />
    } else {
        telaElemento = <MatchLista />
    }

    return (
        <BigCardContainer>
            <Header onClickTrocaTela={handleTrocaTela} />
            <hr />
            {telaElemento}
        </BigCardContainer>
    )
}

export default BigCard