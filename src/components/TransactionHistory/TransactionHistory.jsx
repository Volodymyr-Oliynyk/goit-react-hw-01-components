import React from 'react';
import PropTypes from 'prop-types';
import { TransactionTable, Thead, Tbody } from './TransactionHistoryStyled';

export default function TransactionHistory(props) {
  return (
    <TransactionTable>
     <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        </Thead>
      <Tbody>
        {props.transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
     </Tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
