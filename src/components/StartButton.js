import React from 'react';
import { connect } from  'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { startCountDown, endCountDown } from '../actions/gameActions';

const styles = {
  overlay: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
};

const mapStateToProps = (state) => {
  return {
    showCard: !state.game.gameStarted,
    showButton: state.game.start.wait,
    startButton: state.game.start.startButton,
    countDown: state.game.start.countDown,
  }
}

const mapDispatchToProps = dispatch => ({
  startCountDown: () => dispatch(startCountDown()),
  endCountDown: () => dispatch(endCountDown()),
});

const GameInitCard = (props) => {
  let { showCard, showButton, countDown, startButton, startCountDown } = props;
  if (!showCard)
    return null;
  if (showButton)
    return (<StartCard startButton={startButton} startCountDown={startCountDown}/>)
  else
    return (<CountDown countDown={countDown}/>)
};

const StartCard = (props) => {
  return (
    <Card style={styles.overlay}>
      <Button variant="raised" color='secondary' style={styles.button} onClick={props.startCountDown}>
        {props.startButton}
      </Button>
    </Card>
  );
}

const CountDown = (props) => {
  return (
    <Card style={styles.overlay}>
      <Button variant="raised" color='secondary' style={styles.button}>
        {props.countDown}
      </Button>
    </Card>
  );
}

export class StartButton extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    let { countDown, endCountDown } = nextProps;
    if (countDown <= 0)
      endCountDown();
  }

  render() {
    return (
      <GameInitCard {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);