import React from 'react';
import Board from '../components/Board';

function randomValues(size) {
  let values = Array.from({length: size * size}, (v, k) => k + 1);;

  // Do random shuffle
  for (let i = values.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

export default class GameBoard extends React.PureComponent {
  render() {
    return (
      <Board values={randomValues(this.props.size)} size={this.props.size}/>
    );
  }
}
