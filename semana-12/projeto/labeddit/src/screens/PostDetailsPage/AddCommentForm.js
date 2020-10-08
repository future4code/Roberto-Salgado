import React, { useState } from 'react'
import { Button, CircularProgress, TextField } from '@material-ui/core'
import { AddCommentFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import { addComment } from '../../services/comments'

const AddCommentForm = props => {
  const [form, handleInputChange, resetState] = useForm({text: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddComment = event => {
    event.preventDefault()
    const element = document.getElementById('addcomment-form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addComment(form, `/posts/${props.postId}/comment`, resetState, props.updateComments, setIsLoading)
    }
  }

  return (
    <form id={'addcomment-form'}>
      <AddCommentFormContainer>
          <TextField
            value={form.text}
            name={'text'}
            onChange={handleInputChange}
            label={'Escreva seu comentário'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            required
          />
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          disabled={isLoading}
          onClick={onClickAddComment}
        >
          {isLoading ? <CircularProgress color={"primary"} size={26}/> : "Comentar"}
        </Button>
      </AddCommentFormContainer>
    </form>
  )
}

export default AddCommentForm