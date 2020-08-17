import React from 'react'
import styled from 'styled-components'

const IconCounterContainer = styled.div`
	display: flex;
`

const IconCounterImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return (
		<IconCounterContainer>
			<IconCounterImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
			<p>{props.valorContador}</p>
		</IconCounterContainer>
	)
}
