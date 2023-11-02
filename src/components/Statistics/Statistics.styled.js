import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;
export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;

  box-shadow: 10px 10px 5px #888888;
`;

export const Title = styled.h2`
  box-shadow: 10px 10px 5px #888888;
  color: #9ca19d;
  background-color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const Item = styled.li`
  font-size: 25px;
  color: white;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Number = styled.span`
  font-size: 30px;
`;
