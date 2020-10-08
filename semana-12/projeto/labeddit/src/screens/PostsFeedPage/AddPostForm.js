import React, { useState } from 'react'
import { Button, CircularProgress, DialogActions, TextField } from '@material-ui/core'
import { AddPostFormContainer, InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { addPost } from '../../services/posts'

const AddPostForm = props => {
  const [form, handleInputChange] = useForm({title: '', text: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddPost = event => {
    event.preventDefault()
    const element = document.getElementById('addpost-form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addPost(form, '/posts', props.handleClose, props.updatePosts, setIsLoading)
    }
  }

  return (
    <form id={'addpost-form'}>
      <AddPostFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Título'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.text}
            name={'text'}
            onChange={handleInputChange}
            label={'Escreva seu post'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            required
          />
        </InputsContainer>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            disabled={isLoading}
            onClick={onClickAddPost}
          >
            {isLoading ? <CircularProgress color={"primary"} size={26}/> : "Postar"}
          </Button>
        </DialogActions>
      </AddPostFormContainer>
    </form>
  )
}

export default AddPostForm