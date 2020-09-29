import React from 'react'
import LabEdditLogo from '../../assets/img/logo.png'
import { Button, TextField } from '@material-ui/core'

const LoginPage = () => {
  return (
    <div>
      <img alt={'logo'} src={LabEdditLogo} />
      <form>
        <TextField
          label={'E-mail'}
          variant={'outlined'}
          type={'email'}
        />
        <TextField
          label={'Senha'}
          variant={'outlined'}
          type={'password'}
        />
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
        >
          Fazer Login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage