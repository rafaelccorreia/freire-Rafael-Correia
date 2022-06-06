import logo from './logo.svg';
import './App.css';
import bars from './img/bars-nav.svg';
import homeIcon from './img/home_icon.svg';
import exploreIcon from './img/explore_icon.svg';
import libraryIcon from './img/library_icon.svg';
import historyIcon from './img/history_icon.svg';
import tubeIcon from './img/tube_icon.svg';

function App() {

  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Lab <img src={tubeIcon} alt='ìcone Lab Tube' /> Tube</h1>
            <input type="search" placeholder="Buscar" id="campoDeBusca"/>
            <button className='botao-header'>Fazer login</button>
        </header>
            
        <nav className="menu-vertical">
          <ul className='lista-menu-vertical'>
            <li className="botoes-meunu-vertical">
              <img src={bars} alt='ícone 3 barras horizontais' />
            </li>
            <li className="botoes-meunu-vertical">
              <img src={homeIcon} />
              <p>Início</p>
            </li>
            <li className="botoes-meunu-vertical">
              <img src={exploreIcon} alt='ícone bússula' />
              <p>Explorar</p>
            </li>
            <li className="botoes-meunu-vertical">
              <img src={libraryIcon} alt='ícone da biblioteca' />
              <p>Biblioteca</p>
            </li>
            <li className="botoes-meunu-vertical">
              <img src={historyIcon} alt='ícone do histórico' />
              <p>Histórico</p>
            </li>
          </ul>
        </nav>

        <main>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>
      </div>
    </div>
  );
}

export default App;
