import React from 'react'
import PostCard from './PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { AddPostButton, FeedContainer } from './styled'
import { goToAddPost, goToPostDetails } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'

const PostsFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData({}, '/posts').posts

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

  console.log(posts)

  return (
    <>
      <FeedContainer>
        {posts ? renderPosts() : <Loading/>}
      </FeedContainer>
      <AddPostButton 
        variant="extended" 
        color="primary"
        onClick={()=>goToAddPost(history)}
      >
        <Add/>
        Novo post
      </AddPostButton>
    </>
  )
}

export default PostsFeedPage 