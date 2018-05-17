import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from  'react-redux';
import { blockClick, resetBlock } from '../actions/gameActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

let defaultTheme = createMuiTheme({});
let correctTheme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

const mapStateToProps = (state) => {
  return {
    blocks: state.game.blocks,
  }
}

const mapDispatchToProps = dispatch => ({
  blockClick: (value) => dispatch(blockClick(value)),
  resetBlock: (value) => dispatch(resetBlock(value)),
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
  state = {
    color: 'primary',
    theme: defaultTheme,
  }
  onClickBlock = () => {
    this.props.blockClick(this.props.value);
  }

  chooseColor = (value, blocks) => {
    if (blocks[value]['incorrect'] === null)
      return 'primary';

    let { resetBlock } = this.props;
    // Reset block checking to default (incorrect to null)
    setTimeout(() => {
      resetBlock(value);
    }, 200);
    if (blocks[value]['incorrect'])
      this.setState({theme: defaultTheme});
    else
      this.setState({theme: correctTheme});
    return 'secondary';
  }

  componentWillReceiveProps(nextProps) {
    const { value, blocks } = nextProps;
    let color = this.chooseColor(value, blocks);
    this.setState({color: color});
  }

  render() {
    const blockStyles = genBlockStyle(this.props.length);
    const { value } = this.props;
    const { color, theme } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="raised" color={color} style={blockStyles.button} onClick={this.onClickBlock}>
          {value}
        </Button>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);