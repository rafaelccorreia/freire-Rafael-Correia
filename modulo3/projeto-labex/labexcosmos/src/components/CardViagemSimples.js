import React from 'react'
import styled from 'styled-components'

import trashIcon from '../img/trash_icon.png'

const CardContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    width: 100%;
    height: 5rem;
    background-color: #b9bcbf;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 7px #24b3d2;
    &:hover {
        background-color: white;
        cursor: pointer;
    }
`

const CardNome = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: #122b43;
    flex-grow: 1;
    height: 100%;
`

const CardIcon = styled.img` 
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 100%;
    &:hover {
        background-color: #b9bcbf;
        cursor: pointer;
    }
`

const CardViagemSimples = (props) => {
    return(
        <CardContainer key={props.id}>
            <CardNome 
            onClick={props.onClick}
            id={props.id}
        >{props.tituloViagem}</CardNome>
            <CardIcon 
                src={trashIcon} 
                id={props.id} 
                onClick={props.deleteViagem}    
            />
        </CardContainer>
    )
}

export default CardViagemSimples