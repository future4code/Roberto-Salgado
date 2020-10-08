import React from 'react'
import Typography from '@material-ui/core/Typography'
import {
  CommentsContainer,
  CommentsCounter,
  PostContentWrapper,
  PostDetailsCardContainer,
  PostDetailsContainer,
} from './styled'
import { timePassed } from '../../actions/timePassed'
import Loading from '../../components/Loading/Loading'
import CommentCard from './CommentsCard'
import AddCommentForm from './AddCommentForm'
import PostVotes from '../../components/PostVotes/PostVotes'
import Icon from '@mdi/react'
import { mdiComment } from '@mdi/js'

const PostDetailsCard = props => {
  const comments = props.comments
  
  const renderComments = () => (
    comments.sort((a, b) => a.createdAt - b.createdAt).map(item => {
      return (
        <CommentCard
          key={item.id}
          postId={props.postId}
          commentId={item.id}
          username={item.username}
          createdAt={item.createdAt}
          text={item.text}
          uservotedirection={item.userVoteDirection}
          votesCount={item.votesCount}
          updateComments={props.updatePosts}
        />
      )
    })
  )
  
  return (
    <PostDetailsCardContainer onClick={props.onClick}>
      <PostDetailsContainer>
        <PostVotes 
          votesCount={props.votesCount}
          postId={props.postId}          
          uservotedirection={props.uservotedirection}
          updatePosts={props.updatePosts}
        />
        <PostContentWrapper>
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
            <Icon size={0.6} path={mdiComment}/>
            {props.commentsCount}
            {" "}
            {props.commentsCount === 1 ? "Comentário" : "Comentários"}
          </CommentsCounter>
        </PostContentWrapper>
      </PostDetailsContainer>
      <AddCommentForm postId={props.postId} updateComments={props.updatePosts}/>      
      <CommentsContainer>
        {comments ? renderComments() : <Loading/>}
      </CommentsContainer>
    </PostDetailsCardContainer>
  );
}

export default PostDetailsCard