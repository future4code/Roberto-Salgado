import { Typography } from '@material-ui/core'
import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddPostForm from './AddPostForm'
import { ScreenContainer, PostContainer } from './styled'

const AddPostPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <PostContainer>
        <Typography variant={'h4'} align= {'center'} color={'primary'} gutterBottom>
          Adicionar Novo Post
        </Typography>
        <AddPostForm/>
      </PostContainer>
    </ScreenContainer>
  )
}

export default AddPostPage