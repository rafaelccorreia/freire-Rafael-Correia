import './App.css';
import styled from 'styled-components';
import Conversa from './components/Conversa/Conversa';

const Principal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

function App() {
  return (
    <Principal>
      <Conversa />
    </Principal>
  );
}

export default App;
