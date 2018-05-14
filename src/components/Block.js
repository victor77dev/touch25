import React from 'react';
import Button from '@material-ui/core/Button';

function genBlockStyle(length) {
  const blockStyles = {
    button: {
      width: length,
      height: length,
      minWidth: 36,
      textAlign: 'center',
      fontSize: length / 2,
    },
  };
  return blockStyles;
}

export default class Block extends React.PureComponent {
  render() {
    const blockStyles = genBlockStyle(this.props.length);
    const value = this.props.value;
    return (
      <Button variant="raised" color='primary' style={blockStyles.button}>
        {value}
      </Button>
    );
  }
}
