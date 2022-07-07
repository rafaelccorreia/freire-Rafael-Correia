import styled from "styled-components"
import axios from "axios"
import React, {useState, useEffect} from "react"

const SmallCardContainer = styled.div`
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 3px 3px 10px rgba(231, 109, 137, 0.7);
    color: white;
    display: grid;
    grid-template-rows: 2fr 1fr;
    height: 27rem;
    margin: 1rem;
`

const DadosPessoaContainer = styled.div`
    background: rgba(231, 109, 137, 0.8);
    grid-row: 2 / span 1;
    padding: 1rem;
`

const NomeStyledContainer = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

const NomeStyled = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 0.5rem;
`

const Bio = styled.p`
    font-size: 1.1rem;
`

const SmallCard = () => {
    const [age, setAge] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()
    const [bio, setBio] = useState()

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

    useEffect(() => {
        getProfileToChoose()
    }, [])


    return(
        <SmallCardContainer style={{backgroundImage: `url(${photo})`}}>
            <DadosPessoaContainer>
                <NomeStyledContainer><NomeStyled>{name},</NomeStyled>{age}</NomeStyledContainer>
                <Bio>{bio}</Bio>
            </DadosPessoaContainer>
        </SmallCardContainer>
    )
}

export default SmallCard