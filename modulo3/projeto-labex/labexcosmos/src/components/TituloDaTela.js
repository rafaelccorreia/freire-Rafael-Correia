import React from 'react'
import styled from 'styled-components'

const TituloStyled = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 3.3rem;
    margin: 2rem;
    text-align: center;
`

const TituloDaTela = (props) => {
    return <TituloStyled style={{color: `${props.color}`}}>{props.titulo}</TituloStyled>
}

export default TituloDaTela