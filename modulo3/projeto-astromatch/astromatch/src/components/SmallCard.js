import styled from "styled-components"
import axios from "axios"
import React, {useState, useEffect} from "react"

import greenHeartIcon from '../img/green_heart_icon.png'
import whiteHeartIcon from '../img/white_heart_icon.png'
import redX from '../img/red_x_icon.png'
import whiteX from '../img/white_x_icon.png'

const SmallCardContainer = styled.div`
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 3px 3px 10px rgba(231, 109, 137, 0.8);
    color: white;
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 29rem;
    margin: 1rem;
`

const DadosPessoaContainer = styled.div`
    background: rgba(231, 109, 137, 0.8);
    grid-row: 2 / span 1;
    padding: 1rem;
    border-radius: 10px;
`

const NomeStyledContainer = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

const NomeStyled = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 0.5rem;
    /* #289E3B */
    /* #FF2626 */
`

const Bio = styled.p`
    font-size: 1.1rem;
`

const BotoesContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 1.5rem 0;
`

const BotaoImg = styled.img`
    border-radius: 100%;
    border: 1px solid #222;
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    &:hover {
        transform: scale(1.1);
        background-color: #FF2626;
        cursor: pointer;
        border: none;
    }
`

const BotaoImg2 = styled.img`
    border-radius: 100%;
    border: 1px solid #222;
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    &:hover {
        transform: scale(1.1);
        background-color: #289E3B;
        cursor: pointer;
        border: none;
    }
`

const SmallCard = () => {
    const [age, setAge] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()
    const [bio, setBio] = useState()

    const [heartImg, setHeartImg] = useState(greenHeartIcon)
    const [xImg, setXImg] = useState(redX)

    //requisição para buscar novos profiles na api
    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-correia/person')
        .then(resp => {
            setAge(resp.data.profile.age)
            setName(resp.data.profile.name)
            setPhoto(resp.data.profile.photo)
            setBio(resp.data.profile.bio)
        })
        .catch(err => {
            console.log(err)
        })
    }

    //troca as imagens dos botões quando o mouse passa por cima delas
    const handleBotaoHover = (event) => {
        if(event.target.id === 'xBotao') {
            setXImg(whiteX)
        } else {
            setHeartImg(whiteHeartIcon)
        }
    }

    const handleBotaoLeave = (event) => {
        if(event.target.id === 'xBotao') {
            setXImg(redX)
        } else {
            setHeartImg(greenHeartIcon)
        }
    }

    //lifecycle
    useEffect(() => {
        getProfileToChoose()
    }, [])


    return(
        <div>
            <SmallCardContainer style={{backgroundImage: `url(${photo})`}}>
                <DadosPessoaContainer>
                    <NomeStyledContainer><NomeStyled>{name},</NomeStyled>{age}</NomeStyledContainer>
                    <Bio>{bio}</Bio>
                </DadosPessoaContainer>
            </SmallCardContainer>
            <BotoesContainer>
                <BotaoImg src={xImg} onMouseEnter={handleBotaoHover} onMouseLeave={handleBotaoLeave} id='xBotao'/>
                <BotaoImg2 src={heartImg} onMouseEnter={handleBotaoHover} onMouseLeave={handleBotaoLeave} id='heartBotao'/>
            </BotoesContainer>
        </div>
    )
}

export default SmallCard