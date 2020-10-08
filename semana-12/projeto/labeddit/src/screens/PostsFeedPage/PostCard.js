import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentsCounter, PostActionsWrapper, PostCardContainer, PostContentWrapper, PostVotesWrapper, PostWrapper } from './styled'
import { timePassed } from '../../actions/timePassed'
import Icon from '@mdi/react'
import { mdiComment } from '@mdi/js'
import PostVotes from '../../components/PostVotes/PostVotes'
import { useHistory } from 'react-router-dom'
import { goToPostDetails } from '../../routes/Coordinator'

const PostCard = props => {
  const history = useHistory()
  return (
    <PostCardContainer>
      <PostVotesWrapper>
        <PostVotes
          votesCount={props.votesCount}
          postId={props.postId}
          uservotedirection={props.uservotedirection}
          updatePosts={props.updatePosts}
        />
      </PostVotesWrapper>
      <PostWrapper onClick={() => goToPostDetails(history, props.postId)}>
        <PostContentWrapper>
          <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
            Postado por u/{props.username} · {timePassed(props.createdAt)}
          </Typography>
          <Typography variant="h6" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.text}
          </Typography>
        </PostContentWrapper>
        <PostActionsWrapper>
          <Button size="small" onClick={props.goToPostDetails}>
            <CommentsCounter variant='caption' color="textSecondary">
              <Icon size={0.6} path={mdiComment}/>
              {props.commentsCount}
              {" "}
              {props.commentsCount === 1 ? "Comentário" : "Comentários"}
            </CommentsCounter>
          </Button>
        </PostActionsWrapper>
      </PostWrapper>
    </PostCardContainer>
  );
}

export default PostCard