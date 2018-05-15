import React from 'react';
import Board from '../components/Board';
import StopWatch from '../components/StopWatch';
import { connect } from  'react-redux';

const mapStateToProps = (state) => {
  return {
    values: state.game.values,
  }
}

const mapDispatchToProps = dispatch => ({
});

export class GameBoard extends React.PureComponent {
  render() {
    let { values } = this.props;
    return (
      <div>
        <StopWatch />
        <Board values={values} size={this.props.size}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);