import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from '../../constants/axiosConstants'

const ClearButtonWrapper = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

const ClearButton = props => {

	const clear = () => {
		axios
			.put(`${ baseUrl }/clear`)
			.then(response => {
				console.log(response.data)
				!props.profile && props.getProfile()
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
			<ClearButtonWrapper onClick={ clear }>
				Limpar swipes e matches
			</ClearButtonWrapper>
	)
}

export default ClearButton