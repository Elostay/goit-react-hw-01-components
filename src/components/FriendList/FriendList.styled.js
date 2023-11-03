import styled from '@emotion/styled';

export const List = styled.ul`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Status = styled.div`
  background-color: ${p => (p.$isOnline ? 'green' : 'red')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 50px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid;
  box-shadow: 10px 10px 5px #888888;
  padding: 10px;
  background-color: white;
  border-radius: 30px;
`;
export const Name = styled.p`
  margin-left: 20px;
  font-weight: 500;
  font-size: 30px;
  color: #9ca19d;
`;
