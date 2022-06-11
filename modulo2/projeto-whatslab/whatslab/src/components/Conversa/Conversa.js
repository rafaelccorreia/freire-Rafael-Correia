import React from "react";
import styled from "styled-components";
import backgroundImg from "../../img/background.jpg"
import sendIcon from "../../img/send_icon.png"
import "./conversa.css"

const ContainerConversa = styled.section`
    width: 70%;
    height: 100vh;
    margin: 0;
    font-size: 1.3rem;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

const ContainerMensagem = styled.li`
    background-color: whitesmoke;
    padding: 5px 10px;
    width: 50%;
    border-radius: 10px;
    margin: 10px 0;
    height: auto;
`

const ContainerListaMensagens = styled.ul`
    display: flex;
    flex-direction: column-reverse;
    background: url(${backgroundImg});
    text-decoration: none;
    list-style-type: none;
    width: calc(100% - 2rem);
    height: calc(90% - 2rem);
    margin: 0;
    padding: 1rem;
`

const NomeUsuario = styled.p`
    font-weight: bold;
    margin-top: 0 ;
`

const ContainerInputs = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
    border: 1px solid black;
    width: calc(100% - 2px);
`

const EntradaInput = styled.input`
    font-size: 1.3rem;
    margin: 0.5rem 0;
    padding: 0.3rem 0.8rem;
    margin-left: 10px;
    width: 20%;
    background-color: #222;
    color: white;
    border-radius: 10px;
`

const EntradaInput2 = styled.input`
    font-size: 1.3rem;
    margin: 0.5rem 0;
    padding: 0.3rem 0.8rem;
    margin-left: 10px;
    width: 50%;
    background-color: #222;
    color: white;
    border-radius: 10px;
`

const ImgSend = styled.img`
    width: 3rem;
`

const BotaoEnviar = styled.button`
    border: none;
`

class Conversa extends React.Component {
    state = {
        listaMensagens: [],

        valorInputUser: "",
        valorInputMensagem: ""
    }

    enviarMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputUser,
            mensagem: this.state.valorInputMensagem,
            idUser: ""
        }

        if(novaMensagem.nome.toUpperCase() === "EU") {
            novaMensagem.idUser = "usuario";
            novaMensagem.nome = ""
        } else {
            novaMensagem.idUser = "padrao";
        }

        const novaListaMensagens = [novaMensagem, ...this.state.listaMensagens];
        this.setState({
            listaMensagens: novaListaMensagens
        });

        this.setState({
            valorInputUser: '',
            valorInputMensagem: ''
        });
    }


    onChangeInputUser = (event) => { 
        this.setState({
            valorInputUser: event.target.value
        })
    }

    onChangeInputMensagem = (event) => { 
        this.setState({
            valorInputMensagem: event.target.value
        })
    }

    render() {
        const componentesListaMensagens = this.state.listaMensagens.map((texto, i) => {

            return (
                <ContainerMensagem key={texto.nome + i} id={texto.idUser}>
                    <NomeUsuario>{texto.nome}</NomeUsuario>
                    <p>{texto.mensagem}</p>
                </ContainerMensagem>
            )
        })

        return (
            <ContainerConversa>
                <ContainerListaMensagens>
                    {componentesListaMensagens}
                </ContainerListaMensagens>
                <ContainerInputs>
                    <EntradaInput 
                        onChange={this.onChangeInputUser} 
                        placeholder={"Usuário"}
                        value={this.state.valorInputUser}
                    />
                    <EntradaInput2 
                        onChange={this.onChangeInputMensagem} 
                        placeholder={"Mensagem"}
                        value={this.state.valorInputMensagem}
                    />
                    <BotaoEnviar onClick={this.enviarMensagem}>
                        <ImgSend src={sendIcon} />
                    </BotaoEnviar>
                </ContainerInputs>
            </ContainerConversa>
        )
    }
}

export default Conversa;