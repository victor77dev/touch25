import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Block from './Block';
import StartButton from './StartButton';
import Instruction from './Instruction';

const maxSize = 500;
const minSize = 240;

function genBoardStyle(size, blockSize) {
  const styles = {
    board: {
      maxWidth: maxSize + size,
      maxHeight: maxSize + size,
      width: (blockSize + 1) * size,
      height: (blockSize + 1) * size,
      minWidth: minSize,
      minHeight: minSize,
      position: 'relative',
      display: 'inline-block',
    },
  };
  return styles;
}

export default class Board extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getWindowDim = this.getWindowDim.bind(this);
  }

  getWindowDim() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({width: width, height: height});
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWindowDim.bind(this));
  }
  componentWillMount() {
    this.getWindowDim();
    window.removeEventListener("resize", this.getWindowDim.bind(this));
  }

  render() {
    const { size, values } = this.props;
    const { width, height } = this.state;
    const blockSize = Math.max(Math.min(width, height, maxSize), minSize) / size;
    return (
      <Grid container justify='center' style={genBoardStyle(size, blockSize).board}>
        <Instruction size={size}/>
        <StartButton />
        <GridList
          cols={size}
          spacing={1}
          cellHeight='auto'
        >
          {values.map((value, index) => (
            <GridListTile key={'block' + index}>
              <Block value={value} length={blockSize}/>
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    );
  }
}
