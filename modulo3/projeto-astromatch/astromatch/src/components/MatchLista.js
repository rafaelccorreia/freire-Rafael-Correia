import axios from 'axios'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const ListaContainer = styled.ul`
    margin: 1rem;
`

const ItemContainer = styled.li`
    display: flex;
    padding: 0.5rem;
    margin: 1rem 0;
    align-items: center;
    font-size: 1.3rem;
    &:hover, &:active {
        background-color: #222;
        color: #fff;
        cursor: pointer;
    }
`

const ProfilePhoto = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-right: 1rem;
`

const MatchLista = () => {
    const [listaMatches, setListaMatches] = useState([])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-correia/matches')
        .then(resp => {
            setListaMatches(resp.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
    }, [listaMatches])

    let listaMatchesJsx = listaMatches.map((match) => {
        return  <ItemContainer key={match.id}>
                    <ProfilePhoto src={match.photo} />
                    <span>{match.name}</span>
                </ItemContainer>
    })

    return (
        <ListaContainer>
            {listaMatchesJsx}
        </ListaContainer>
    )
}

export default MatchLista