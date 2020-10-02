import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CommentsCounter, PostCardDetailsContainer } from './styled'
import { timePassed } from '../../actions/timePassed'
import Loading from '../../components/Loading/Loading'
import CommentCard from './CommentsCard'
import AddCommentForm from './AddCommentForm'

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
    <PostCardDetailsContainer onClick={props.onClick}>
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
        <CommentsCounter color="textSecondary" >
          {props.commentsCount}
          {" "}
          {props.commentsCount === 1 ? "Comentário" : "Comentários"}
        </CommentsCounter>
      </CardContent>


      <AddCommentForm postId={props.postId} updateComments={props.updateDetails}/>
      
      <CardContent>
        {comments ? renderComments() : <Loading/>}
      </CardContent>
    </PostCardDetailsContainer>
  );
}

export default PostDetailsCard