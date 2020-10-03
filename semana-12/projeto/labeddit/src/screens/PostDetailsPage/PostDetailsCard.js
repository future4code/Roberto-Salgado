import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {
  CommentsContainer,
  CommentsCounter,
  PostDetailsCardContainer,
  PostDetailsContainer,
} from './styled'
import { timePassed } from '../../actions/timePassed'
import Loading from '../../components/Loading/Loading'
import CommentCard from './CommentsCard'
import AddCommentForm from './AddCommentForm'
import PostVotes from './PostVotes'

const PostDetailsCard = props => {
  const comments = props.comments
  const renderComments = () => (
    comments.sort((a, b) => a.createdAt - b.createdAt).map(item => {
      return (
        <CommentCard
          key={item.id}
          username={item.username}
          createdAt={item.createdAt}
          text={item.text}
          userVoteDirection={item.userVoteDirection}
          votesCount={item.votesCount}
        />
      )
    })
  )
  
  return (
    <PostDetailsCardContainer onClick={props.onClick}>
      <PostDetailsContainer>
        <PostVotes votesCount={props.votesCount} />
        <CardContent>
          <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
            u/{props.username} {timePassed(props.createdAt)}
          </Typography>
          <Typography variant="h6" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {props.text}
          </Typography>
          <CommentsCounter variant="caption" color="textSecondary" >
            {props.commentsCount}
            {" "}
            {props.commentsCount === 1 ? "Comentário" : "Comentários"}
          </CommentsCounter>
        </CardContent>
      </PostDetailsContainer>
      <AddCommentForm postId={props.postId} updateComments={props.updateDetails}/>      
      <CommentsContainer>
        {comments ? renderComments() : <Loading/>}
      </CommentsContainer>
    </PostDetailsCardContainer>
  );
}

export default PostDetailsCard