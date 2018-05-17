import React from 'react';
import { connect } from  'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { closeInstruction } from '../actions/gameActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 3,
    textAlign: 'center',
  },
  overlayButton: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 4,
    textAlign: 'center',
  },
  textDiv: {
    top: '50%',
    position: 'absolute',
    transform: 'translate(0%, -50%)',
  },
  textQue: {
    textAlign: 'center',
    color: grey['300'],
  },
  textAns: {
    textAlign: 'center',
    color: grey['400'],
  },
});

const mapStateToProps = (state) => {
  return {
    showIntro: state.game.showIntro,
  }
}

const mapDispatchToProps = dispatch => ({
  closeInstruction: () => dispatch(closeInstruction()),
});

export class Instruction extends React.PureComponent {
  InstructionCard = () => {
    let { size, classes, showIntro, closeInstruction } = this.props;
    if (!showIntro)
      return null;
    return (
      <Card className={classes.overlay}>
        <Card className={classes.overlayButton} onClick={closeInstruction}>
        </Card>
        <div className={classes.textDiv}>
          <Typography variant="display3" component="h1" className={classes.textQue}>
            How to play?
          </Typography>
          <Typography variant="headline" component="h3" className={classes.textAns}>
            Click all the numbers from 1 to {size * size} as fast as possible.
          </Typography>
        </div>
      </Card>
    );
  }

  render() {
    return (
      this.InstructionCard()
    );
  }
}

Instruction.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledInstruction = withStyles(styles)(Instruction);
export default connect(mapStateToProps, mapDispatchToProps)(StyledInstruction);