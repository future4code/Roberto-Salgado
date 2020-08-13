import React from 'react'
import './SecaoCompartilhar.css'
	
export function SecaoCompartilhar(props) {
	return (
		<div className={'social-container'}>
			<img alt={'Icone'} src={props.social1} onClick={props.onClickSocial1}/>
			<img alt={'Icone'} src={props.social2} onClick={props.onClickSocial2}/>
			<img alt={'Icone'} src={props.social3} onClick={props.onClickSocial3}/>
		</div>
	)	
}
