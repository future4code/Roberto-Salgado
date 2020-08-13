import React from 'react'
import './IconeSimples.css'

export function IconeSimples(props) {
	return (
		<div className={'icon-container'}>
			<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		</div>
	)
}
