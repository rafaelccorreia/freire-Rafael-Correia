import './App.css'
import styled from 'styled-components'
import BigCard from './components/BigCard'

const ContainerGeral = styled.div`
  align-items: center;
  background-color: purple;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const App = () => {
  return (
    <ContainerGeral className="App">
      <BigCard />
    </ContainerGeral>
  )
}

export default App
