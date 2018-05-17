import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { connect } from  'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  hint: theme.mixins.gutters({
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    display: 'inline-block',
    width: '30%',
  }),
});

const mapStateToProps = (state) => {
  return {
    nextClick: state.game.nextClick,
  }
}

const mapDispatchToProps = dispatch => ({
});

export class Hint extends React.PureComponent {
  render() {
    const { nextClick, classes } = this.props;

    return (
      <Paper className={classes.hint}>
        <Typography variant="headline" component="h3">
          Next:
        </Typography>
        <Typography variant="headline" component="h2" color='secondary'>
          {nextClick}
        </Typography>
      </Paper>
    );
  }
}

Hint.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledHint = withStyles(styles)(Hint);
export default connect(mapStateToProps, mapDispatchToProps)(StyledHint);