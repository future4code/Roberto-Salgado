import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Icon from '@mdi/react'

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

export const HeaderTitle = styled(Typography)`
  padding-left: 16px;
`

export const LogoIcon = styled(Icon)`
  display: block;
  color: inherit;
`