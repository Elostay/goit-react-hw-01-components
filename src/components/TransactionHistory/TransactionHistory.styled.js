import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid black;
  background-color: white;
`;
export const Thead = styled.thead`
  margin-bottom: 50px;
  background-color: #f2f2f2;
  background-color: black;
  color: white;
`;
export const RowInfo = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const TableColumn = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #dddddd;
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const BorderHead = styled.th`
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
`;
