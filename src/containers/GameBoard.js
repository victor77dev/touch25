import React from 'react';
import Board from '../components/Board';
import StopWatch from '../components/StopWatch';
import Hint from '../components/Hint';
import { connect } from  'react-redux';

const mapStateToProps = (state) => {
  return {
    values: state.game.values,
    nextClick: state.game.nextClick,
  }
}

const mapDispatchToProps = dispatch => ({
});

export class GameBoard extends React.PureComponent {
  render() {
    let { values, nextClick } = this.props;
    let stopWatchWidth = '70%';
    return (
      <div>
        <div>
          <StopWatch width={stopWatchWidth}/>
          <Hint nextClick={nextClick}/>
        </div>
        <Board values={values} size={this.props.size}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);