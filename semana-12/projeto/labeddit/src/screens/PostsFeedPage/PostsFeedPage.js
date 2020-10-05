import React, { useState } from 'react'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Loading from '../../components/Loading/Loading'
import { AddPostButton, FeedContainer } from './styled'
import { Add } from '@material-ui/icons'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddPostForm from './AddPostForm'
import useGetPosts from '../../hooks/useRequestData'

const PostsFeedPage = () => {
  useProtectedPage()
  const [open, setOpen] = useState(false)
  const [feed, updateFeed] = useGetPosts({}, '/posts')

  const posts = feed.posts

  const renderPosts = () => (
    posts.filter(item => {
      return typeof item.title === 'string' // filtro para corrigir um dado no endpoint da API que não estava no formato esperado
    }).sort((a, b) => b.createdAt - a.createdAt).map(item => {
      return (
        <PostCard
          key={item.id}
          postId={item.id}
          username={item.username}
          createdAt={item.createdAt}
          title={item.title}
          text={item.text}
          uservotedirection={item.userVoteDirection}
          votesCount={item.votesCount}
          commentsCount={item.commentsCount}
          updatePosts={updateFeed}
        />
      )
    })
  )

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FeedContainer>
        {posts ? renderPosts() : <Loading/>}
      </FeedContainer>
      <AddPostButton 
        variant="extended" 
        color="primary"
        onClick={handleClickOpen}
      >
        <Add/>
        Novo post
      </AddPostButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar Novo Post</DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClose} updatePosts={updateFeed}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PostsFeedPage



      
    