import React, { useState } from 'react'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Loading from '../../components/Loading/Loading'
import { AddPostButton, FeedContainer } from './styled'
import { goToPostDetails } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddPostForm from './AddPostForm'
import useGetPosts from '../../hooks/useRequestData'

const PostsFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [feed, updateFeed] = useGetPosts({}, '/posts')

  const posts = feed.posts

  const renderPosts = () => (
    posts.sort((a, b) => b.createdAt - a.createdAt).map(item => {
      return (
        <PostCard
          key={item.id}
          onClick={() => goToPostDetails(history, item.id)}
          username={item.username}
          createdAt={item.createdAt}
          title={item.title}
          text={item.text}
          commentsCount={item.commentsCount}
          userVoteDirection={item.userVoteDirection}
          votesCount={item.votesCount}
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

  console.log(posts)

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



      
    