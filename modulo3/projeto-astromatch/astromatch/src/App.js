import './App.css'
import styled from 'styled-components'
import BigCard from './components/BigCard'
import axios from 'axios'

const ContainerGeral = styled.div`
  align-items: center;
  background-color: #222;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const Limpa = styled.p`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 10px;
  color: red;
  font-weight: bold;
  &:hover, &:active {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`

const App = () => {
  const handleLimparTudo = () => {
    if(window.confirm('Tem certeza que deseja limpar todos os seus Matches?')){
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-correia/clear', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        alert('Limpeza feita com sucesso!')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <ContainerGeral className="App">
      <BigCard />
      <Limpa onClick={handleLimparTudo}>Limpar swipes e matches</Limpa>
    </ContainerGeral>
  )
}

export default App
