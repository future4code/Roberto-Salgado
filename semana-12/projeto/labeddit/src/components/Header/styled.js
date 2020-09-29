import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import Icon from '@mdi/react'

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

export const LogoIcon = styled(Icon)`
  display: block;
  color: inherit;
`

export const HeaderTitle = styled(Typography)`
  padding-left: 13px;
  text-transform: none;
`

export const LogTitle = styled(Typography)`
  text-transform: none;
`