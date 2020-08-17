import React from 'react'
import styled from 'styled-components'

const SocialContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
`

const SocialImage = styled.img`
  width: 25px;
`
	
export function SecaoCompartilhar(props) {
	return (
		<SocialContainer>
			<SocialImage alt={'Icone'} src={props.social1} onClick={props.onClickSocial1}/>
			<SocialImage alt={'Icone'} src={props.social2} onClick={props.onClickSocial2}/>
			<SocialImage alt={'Icone'} src={props.social3} onClick={props.onClickSocial3}/>
		</SocialContainer>
	)	
}
