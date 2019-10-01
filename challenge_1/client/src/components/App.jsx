import React from 'react';
import TicTacToeBoard from './TicTacToeBoard.jsx';
import Axios from 'axios'; //maybe I'll need it
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <TicTacToeBoard/>
      </div>
    )
  }
}

export default App;