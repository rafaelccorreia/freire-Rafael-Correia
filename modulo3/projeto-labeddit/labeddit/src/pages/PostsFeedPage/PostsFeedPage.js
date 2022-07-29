import React from 'react'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { SquaredButtonFilled } from '../../components/BotaoGradient/BotaoGradient'
import { MainContainer, InputStyled, TextAreaStyled, LinhaGradient } from './styled'

const PostsFeedPage = () => {
    useProtectedPage()
    const [dados, onChange, clear] = useForm({title: '', body: ''})
    useTela('Posts Feed Page')

    const handleCriarPost = () => {

    }

    return(
        <MainContainer>
            <form onSubmit={handleCriarPost}>
                <InputStyled
                    name='title'
                    value={dados.title}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Título do post'}
                />
                <TextAreaStyled
                    name='body'
                    value={dados.body}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Escreva seu post...'}
                />
                <SquaredButtonFilled 
                    type={'submit'}
                    text={'Postar'}
                    value={'submit'}
                />
            </form>
            <LinhaGradient />
        </MainContainer>
    )
}

export default PostsFeedPage