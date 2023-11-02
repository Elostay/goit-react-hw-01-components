import {
  Table,
  Thead,
  RowInfo,
  TableColumn,
  BorderHead,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <BorderHead>Amount</BorderHead>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <RowInfo key={id}>
              <TableColumn>{type}</TableColumn>
              <TableColumn>{amount}</TableColumn>
              <TableColumn>{currency}</TableColumn>
            </RowInfo>
          );
        })}
      </tbody>
    </Table>
  );
};
