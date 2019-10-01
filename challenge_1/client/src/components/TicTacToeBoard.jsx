import React from 'react';
import TicTacToeItem from './TicTacToeItem.jsx';

const TicTacToeBoard = (props) => {
  return (
    <table>
      <tr>
        <td></td>
        <td class="vert"></td>
        <td></td>
      </tr>
      <tr>
        <td class="hori"></td>
        <td class="vert hori"></td>
        <td class="hori"></td>
      </tr>
      <tr>
        <td></td>
        <td class="vert"></td>
        <td></td>
      </tr>
    </table>
  )
};

export default TicTacToeBoard;