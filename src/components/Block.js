import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from  'react-redux';
import { blockClick } from '../actions/gameActions';

const mapStateToProps = (state) => {
  return {
    blocks: state.game.blocks,
  }
}

const mapDispatchToProps = dispatch => ({
  blockClick: (value) => dispatch(blockClick(value)),
});

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

export class Block extends React.PureComponent {
  onClickBlock = () => {
    this.props.blockClick(this.props.value);
  }

  render() {
    const blockStyles = genBlockStyle(this.props.length);
    const value = this.props.value;
    return (
      <Button variant="raised" color='primary' style={blockStyles.button} onClick={this.onClickBlock}>
        {value}
      </Button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);