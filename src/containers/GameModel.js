import React from 'react';
import { connect } from  'react-redux';
import { startGame, endGame, updateGameRecord, updateNextClick } from '../actions/gameActions';

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted,
    gameEnd: state.game.gameEnd,
    currentTime: state.game.currentTime,
    blocks: state.game.blocks,
    nextClick: state.game.nextClick,
  }
}

const mapDispatchToProps = dispatch => ({
  startGame: (size) => dispatch(startGame(size)),
  endGame: () => dispatch(endGame()),
  updateGameRecord: (time) => dispatch(updateGameRecord(time)),
  updateNextClick: (number) => dispatch(updateNextClick(number)),
});

export class GameModel extends React.PureComponent {
  componentDidMount() {
    let { startGame, size } = this.props;
    startGame(size);
  }

  checkBlocks = (blocks, size) => {
    let { endGame, updateNextClick, nextClick } = this.props;
    for (let i = 1; i <= size * size; i++) {
      if (i !== nextClick && blocks[i]['clicked'])
        blocks[i]['incorrect'] = true;
      if (i === nextClick && blocks[nextClick]['clicked']) {
        blocks[nextClick]['completed'] = true;
        blocks[nextClick]['incorrect'] = false;
        nextClick++
      }
    }
    if (blocks[size * size]['completed']) {
      updateNextClick(1);
      endGame();
    }
    else if (blocks[nextClick]['completed']) {
      nextClick++;
      updateNextClick(nextClick);
    }

    //Reset all clicks
    for (let i = 0; i < size * size; i++)
      blocks[i + 1]['clicked'] = false;
  }

  componentWillReceiveProps(nextProps) {
    let { blocks, size, gameEnd, currentTime, startGame, updateGameRecord } = nextProps;
    if (Object.keys(blocks).length !== 0)
      this.checkBlocks(blocks, size);

    // Reset game
    if (gameEnd) {
      updateGameRecord(currentTime);
      startGame(size);
    }
  }

  render() {
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModel);