import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import PostDetailsCard from './PostDetailsCard'
import { DetailsContainer } from './styled'

const PostDetailsPage = () => {
  useProtectedPage()
  const {id} = useParams()
  const [details, updateDetails] = useRequestData({}, `/posts/${id}`)

  const post = details.post

  const renderDetails = () => (
    <PostDetailsCard
      postId={post.id}
      username={post.username}
      createdAt={post.createdAt}
      title={post.title}
      text={post.text}
      votesCount={post.votesCount}
      uservotedirection={post.userVoteDirection}
      commentsCount={post.commentsCount}
      comments={post.comments}
      updatePosts={updateDetails}
    />
  )
  
  return (
    <DetailsContainer>
      {post ? renderDetails(): <Loading/>}
    </DetailsContainer>
  )
}

export default PostDetailsPage