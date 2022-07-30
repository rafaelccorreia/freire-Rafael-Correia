import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CardPostDetailsContainer, NomeUsuario, PostMessage, Postbotoes, PostBotoesDiv } from './styled'
import IconCurtirLight from '../../assets/icon_curtida_light.png'
import IconDescurtirLight from '../../assets/icon_descurtir_light.png'
import IconComment from '../../assets/icon_comment.png'

const CardPostDetails = (props) => {
    return (
        <CardPostDetailsContainer 
        key={props.id} 
        id={props.id}
        ref={props.refProp}
        >
            <NomeUsuario>Enviado por: {props.userName}</NomeUsuario>
            <PostMessage>{props.body}</PostMessage>
            <Postbotoes>
                <PostBotoesDiv>
                    <img src={IconCurtirLight} alt='Ícone curtir'/>
                    <span>{props.voteSum}</span>
                    <img src={IconDescurtirLight} alt='Ícone descurtir'/>
                </PostBotoesDiv>
                <PostBotoesDiv>
                    <img src={IconComment} alt='Ícone de comentários' />
                    <span>{props.commentCount}</span>
                </PostBotoesDiv>
            </Postbotoes>
        </CardPostDetailsContainer>
    )
}

export default CardPostDetails