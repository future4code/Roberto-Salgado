import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'

import {IconeSimples} from '../IconeSimples/IconeSimples'
import iconeMarcacaoBranco from '../../img/bookmark_border-black.svg'
import iconeMarcacaoPreto from '../../img/bookmark-black.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeComentario from '../../img/comment_icon.svg'

import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeCompartilhar from '../../img/share.svg'
import iconeInstagram from '../../img/instagram.svg'
import iconeFacebook from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    valorMensagem: ``
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

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <div className='share-container'>
				<input 
					className='input-compartilhar'
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
      </div>
    }

    return (
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

        <div className={'post-footer'}>
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
        </div>
        {componenteComentario}
        {componenteCompartilhar}
      </div>
    )
  }
}

export default Post