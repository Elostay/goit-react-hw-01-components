import {
  ProfileList,
  ProfileListItem,
  ProfileListItemCategory,
  ProfileListItemNumbers,
  NameContainer,
  Photo,
  Container,
  Title,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <NameContainer>
        <Photo src={avatar} alt="User avatar" />
        <Title>{username}</Title>
        <p>@{tag}</p>
        <p>{location}</p>
      </NameContainer>
      <ProfileList>
        <ProfileListItem>
          <ProfileListItemCategory>Followers</ProfileListItemCategory>
          <ProfileListItemNumbers>{stats.followers}</ProfileListItemNumbers>
        </ProfileListItem>
        <ProfileListItem>
          <ProfileListItemCategory>Views</ProfileListItemCategory>
          <ProfileListItemNumbers>{stats.views}</ProfileListItemNumbers>
        </ProfileListItem>
        <ProfileListItem>
          <ProfileListItemCategory>Likes</ProfileListItemCategory>
          <ProfileListItemNumbers>{stats.likes}</ProfileListItemNumbers>
        </ProfileListItem>
      </ProfileList>
    </Container>
  );
};
