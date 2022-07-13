import { Router } from './routes/Router';
import styled from 'styled-components';
import BackgroundImg from './img/background.jpg'

const ContainerGeral = styled.div`
  background: url(${BackgroundImg});
  width: 100%;
  min-height: 100vh;
  height: 100%;
`

function App() {
  return (
    <ContainerGeral>
      <Router />
    </ContainerGeral>
  );
}

export default App;
