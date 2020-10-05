import React from 'react'
import { Typography } from '@material-ui/core'
import { ErrorImage, ErrorPageContainer } from './styled'
import ErrorImageSource from '../../assets/img/error.png'

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage alt={'Erro404'} src={ErrorImageSource} />
      <Typography color={'primary'} variant={'h4'} align={'center'} >
        {"Erro 404 - Página não encontrada :("}
      </Typography>
    </ErrorPageContainer>
  )
}

export default ErrorPage