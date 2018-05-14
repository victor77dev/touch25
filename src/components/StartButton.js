import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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

export default class StartButton extends React.PureComponent {
  render() {
    return (
      <Card style={styles.overlay}>
        <Button variant="raised" color='secondary' style={styles.button}>
          Start
        </Button>
      </Card>
    );
  }
}
