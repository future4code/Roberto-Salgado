import React from 'react'
import styled from 'styled-components'

const IconSimpleContainer = styled.div`
  display: flex;
`

const IconSimpleImage = styled.img`
  margin-right: 5px;
`

export function IconeSimples(props) {
	return (
		<IconSimpleContainer>
			<IconSimpleImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		</IconSimpleContainer>
	)
}
