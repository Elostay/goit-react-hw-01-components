import { List, IsOnline, IsNotOnline, Item, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            {isOnline ? <IsOnline /> : <IsNotOnline />}
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};
