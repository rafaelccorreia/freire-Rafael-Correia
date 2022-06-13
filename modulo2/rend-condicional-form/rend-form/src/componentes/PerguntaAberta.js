import React from 'react'
import Styled from 'styled-components'

const PerguntaAContainer = Styled.section`
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: space-around;
    align-items: center;
`

class PerguntaAberta extends React.Component {
    render() {
        return (
            <PerguntaAContainer>
                <label htmlFor={this.props.id}>{this.props.pergunta}</label>
                <input type={this.props.tipo} id={this.props.id} required={this.props.obrigatoria}/>
            </PerguntaAContainer>
        )
    }
}

export default PerguntaAberta