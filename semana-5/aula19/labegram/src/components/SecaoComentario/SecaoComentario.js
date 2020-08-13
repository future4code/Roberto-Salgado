import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: ``
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
	}

	render() {

		// console.log(`Comentário`, this.state.valorComentario)
		return (
			<div className={'comment-container'}>
				<input
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={this.state.valorComentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.props.aoEnviar}>Enviar</button>
			</div>
		)
	}
}
