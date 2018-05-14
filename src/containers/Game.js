import React from 'react';
import Menu from '../containers/Menu';
import Record from '../containers/Record';
import GameBoard from '../containers/GameBoard';

export default class Game extends React.Component {
  render() {
    let menuButtons = ['Reset'];
    return (
      <div>
        <Menu buttons={menuButtons}/>
        <Record />
        <GameBoard size={5}/>
      </div>
    );
  }
}