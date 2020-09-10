import React from 'react'
import styled from 'styled-components'

const ClearButtonWrapper = styled.button`
    position: fixed;
	bottom: 5px;
	right: 5px;
`

const ClearButton = () => {
	return (
			<ClearButtonWrapper>Limpar swipes e matches</ClearButtonWrapper>
	)
}

export default ClearButton