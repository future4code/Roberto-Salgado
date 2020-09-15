import styled from 'styled-components'

export const AppBarWrapper = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 10px;
	flex-shrink: 0;
`
export const Logo = styled.div`
	height: 100%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
  font-family: 'Spartan', sans-serif;
  font-size: 21px;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
`

export const Astro = styled.h3`
  color: #50A89C;
`
export const Match = styled.h3`
  color: #772991;
`

export const ActionWrapper = styled.div`
  cursor: pointer;
  transition: 0.2s;
  
  :hover {
    transform: scale(0.9);
  }
`