import React from 'react'
import {
  UserCardWrapper,
  BlurredBackground,
  ProfilePicture,
  InfoWrapper,
  TitleWrapper,
  UserName,
  UserAge,
  UserDescription
} from './styled'

const UserCard = props => {
  return (
    <UserCardWrapper>
      <BlurredBackground photo={props.user.photo}/>
      <ProfilePicture src={props.user.photo} />
      <InfoWrapper>
        <TitleWrapper>
          <UserName>{props.user.name}</UserName>
          <UserAge>{props.user.age}</UserAge>
        </TitleWrapper>
        <UserDescription>{props.user.bio}</UserDescription>
      </InfoWrapper>
    </UserCardWrapper>
  )
}

export default UserCard