import React from 'react'
import './App.css'
import Post from './components/Post/Post'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`

const FormHeader = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  top: 0px;
  left: 0px;
`

const InputPostar = styled.input`
  width: ${props => {
    if (props.tipo === "nome") {
      return "145px"
    } else if (props.tipo === "foto") {
      return "390px"
    }
  }};
`

const BotaoPostar = styled.button`
  height: 2rem;
  background-color: #000;
  color: #FFF;
  font-weight: 800;
  text-transform: uppercase;
  border: 2px solid #FFF;
  border-radius: 1rem;
  padding: 0 1rem;
  &:focus {
    background-color: #FFF;
    color: #000;
    outline: none;
  }
`


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: 'darvasso',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'dabreu',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [novoPost, ...this.state.posts]

    this.setState({ posts: novoPosts })
    this.setState({ valorInputNomeUsuario: "" })
    this.setState({ valorInputFotoUsuario: "" })
    this.setState({ valorInputFotoPost: "" })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post 
          nomeUsuario = { post.nomeUsuario }
          fotoUsuario = { post.fotoUsuario }
          fotoPost = { post.fotoPost }
        />
      )
    })

    return (
      <div>
        <FormHeader>
          <InputPostar 
            value={ this.state.valorInputNomeUsuario }
            onChange={ this.onChangeInputNomeUsuario }
            placeholder={'Nome do Usuário'}
            tipo={"nome"}
          />
          <InputPostar 
            value={ this.state.valorInputFotoUsuario }
            onChange={ this.onChangeInputFotoUsuario }
            placeholder={'Foto do Usuário'}
            tipo={"foto"}
          />
          <InputPostar 
            value={ this.state.valorInputFotoPost }
            onChange={ this.onChangeInputFotoPost }
            placeholder={'Foto do Post'}
            tipo={"foto"}
          />
          <BotaoPostar onClick={this.adicionarPost}>Postar</BotaoPostar>
        </FormHeader>
        <AppContainer>{listaPosts}</AppContainer>
      </div>
    );
  }
}

export default App;
