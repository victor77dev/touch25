import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from  'react-redux';
import { startStopWatch } from '../actions/gameActions';

const styles = theme => ({
  timer: theme.mixins.gutters({
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  }),
});

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted,
    currentTime: state.game.currentTime,
  }
}

const mapDispatchToProps = dispatch => ({
  startStopWatch: () => dispatch(startStopWatch()),
});

export class StopWatch extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    let { gameStarted, currentTime, startStopWatch } = nextProps;
    if (currentTime === 0 && gameStarted) {
      startStopWatch();
    }
  }

  render() {
    const { classes } = this.props;
    let { currentTime } = this.props;
    let date = new Date(null);
    date.setMilliseconds(currentTime);
    let formatedTime = date.toISOString().substr(11, 12);

    return (
      <Paper className={classes.timer}>
        <Typography variant="headline" component="h3">
          Time
        </Typography>
        <Typography variant="headline" component="h2" color='secondary'>
          {formatedTime}
        </Typography>
      </Paper>
    );
  }
}

StopWatch.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledStopWatch = withStyles(styles)(StopWatch);
export default connect(mapStateToProps, mapDispatchToProps)(StyledStopWatch);