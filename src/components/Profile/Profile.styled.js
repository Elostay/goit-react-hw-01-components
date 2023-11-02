import styled from '@emotion/styled';
export const Container = styled.div`
  border-radius: 20px;

  border: 1px solid #e3e6e4;
  margin: 0 auto;
  box-shadow: 10px 10px 5px #888888;
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #e3e6e4;
`;
export const ProfileListItem = styled.li`
  width: 360px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 30px;
  border-top: 1px solid #9ca19d;
  :nth-of-type(2) {
    border-right: 1px solid #c8ccc9;
    border-left: 1px solid #c8ccc9;
  }
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 40px;
  color: black;
`;
export const ProfileListItemCategory = styled.span`
  color: #9ca19d;
`;
export const ProfileListItemNumbers = styled.span`
  font-weight: 500;
`;
export const NameContainer = styled.div`
  background-color: white;
  padding-bottom: 30px;
  padding-top: 30px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: #9ca19d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Photo = styled.img`
  width: 200px;

  border: 1px solid black;
  border-radius: 50%;
`;
export const Info = styled.p``;
