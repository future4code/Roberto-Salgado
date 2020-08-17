import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from './IconeComContador'
import {IconeSimples} from './IconeSimples'
import {SecaoCompartilhar} from './SecaoCompartilhar'

import iconeCoracaoBranco from '../img/favorite-white.svg'
import iconeCoracaoPreto from '../img/favorite.svg'
import iconeMarcacaoBranco from '../img/bookmark_border-black.svg'
import iconeMarcacaoPreto from '../img/bookmark-black.svg'
import iconeComentario from '../img/comment_icon.svg'
import iconeCompartilhar from '../img/share.svg'
import iconeInstagram from '../img/instagram.svg'
import iconeFacebook from '../img/facebook.svg'
import iconeTwitter from '../img/twitter.svg'

const ShareConteiner = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
`

const InputComentario = styled.input`
	width: 100%;
	margin-right: 5px;
`

const Comentarios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
`

const Comentario = styled.p`
  border-bottom: 1px solid #BBB;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    valorMensagem: ``,
    valorComentario: ``,
    listaComentarios: []
  }

  onClickCurtida = () => {
    if (this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas:this.state.numeroCurtidas +1
      })
    }
  }

  onClickComentario = () => {
    this.setState({ comentando: !this.state.comentando })
  }

  onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
	}

  aoEnviarComentario = () => {
    const novoComentario = this.state.valorComentario
    const novaListaComentarios = [novoComentario, ...this.state.listaComentarios]
    
    this.setState({
      listaComentarios: novaListaComentarios,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      valorComentario: ``
    })
  }

  onClickMarcacao = () => {
    this.setState({ marcado: !this.state.marcado })
  }

  onClickCompartilhar = () => {
    this.setState({ compartilhando: !this.state.compartilhando })
  }

  onChangeMensagem = (event) => {
		this.setState({valorMensagem: event.target.value})
	}

  onClickInstagram = () => {
    this.setState({ compartilhando: false })
    console.log('Post compartilhado no Instagram com a mensagem:', this.state.valorMensagem)
  }

  onClickFacebook = () => {
    this.setState({ compartilhando: false })
    console.log('Post compartilhado no Facebook com a mensagem:', this.state.valorMensagem)
  }

  onClickTwitter = () => {
    this.setState({ compartilhando: false })
    console.log('Post compartilhado no Twitter com a mensagem:', this.state.valorMensagem)
  }

  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao
    if(this.state.marcado) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = (
        <CommentContainer>
          <InputComentario
            placeholder={'Comentário'}
            value={this.state.valorComentario}
            onChange={this.onChangeComentario}
          />
          <button onClick={this.aoEnviarComentario}>Enviar</button>
        </CommentContainer>
      )
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <ShareConteiner>
				<input
					placeholder='Mensagem'
					value={this.state.valorMensagem}
					onChange={this.onChangeMensagem}
				/>
        <SecaoCompartilhar 
          social1={iconeInstagram}
          social2={iconeFacebook}
          social3={iconeTwitter}
          onClickSocial1={this.onClickInstagram}
          onClickSocial2={this.onClickFacebook}
          onClickSocial3={this.onClickTwitter}
        />
      </ShareConteiner>
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>
        
        <Comentarios>
          {this.state.listaComentarios.map((comentario) => {
            return <Comentario>{comentario}</Comentario>
          }
          )}
        </Comentarios>

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeSimples 
            icone={iconeMarcacao}
            onClickIcone={this.onClickMarcacao}
          />
          
          <IconeSimples 
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />
        </PostFooter>
        {componenteComentario}
        {componenteCompartilhar}
      </PostContainer>
    )
  }
}

export default Post