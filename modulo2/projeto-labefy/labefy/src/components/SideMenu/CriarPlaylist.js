import React from 'react'

class CriarPlaylist extends React.Component {
    state = {
        valorInputNome: ''
    }

    handleValorNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    render() {
        return (
            <section>
                <h4>Criar Playlist ➕</h4>
                <div>
                    <label htmlFor='nomeNovaPlaylist'>Nome:</label>
                    <input 
                        id='nomeNovaPlaylist'
                        type='text' 
                        value={this.state.valorInputNome}
                        onChange={this.handleValorNome} 
                    />
                </div>
            </section>
        )
    }
}

export default CriarPlaylist