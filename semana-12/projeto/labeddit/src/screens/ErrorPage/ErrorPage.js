import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ErrorPageContainer } from './styled'

const ErrorPage = () => {
  <ErrorPageContainer>
    <Typography color={'primary'} variant={'h4'} align={'center'} >
      Erro 404 - Página não encontrada :(
    </Typography>
  </ErrorPageContainer>
}

export default ErrorPage