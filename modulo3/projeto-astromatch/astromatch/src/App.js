import './App.css'
import styled from 'styled-components'
import BigCard from './components/BigCard'

const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const App = () => {
  return (
    <ContainerGeral className="App">
      <BigCard />
    </ContainerGeral>
  )
}

export default App
