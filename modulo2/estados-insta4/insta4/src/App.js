import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import joaoFoto from './img/joao123.webp';
import joaoPost from './img/joaopost.jpg';
import gigaFoto from './img/gigachad.jpg';
import gigaPost from './img/gigapost.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joãozinho123'}
          fotoUsuario={joaoFoto}
          fotoPost={joaoPost}
        />
        <Post
          nomeUsuario={'Gigachad'}
          fotoUsuario={gigaFoto}
          fotoPost={gigaPost}
        />
      </MainContainer>
    );
  }
}

export default App;
