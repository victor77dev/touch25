import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from  'react-redux';
import { resetGame } from '../actions/gameActions'

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menu: {
    top: 38,
  },
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  resetGame: (size) => dispatch(resetGame(size)),
});

export class GameMenu extends React.PureComponent {
  state = {
    anchorEl: null,
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  gameReset = () => {
    this.handleMenuClose();
    this.props.resetGame(this.props.size);
  };

  addButtons = (list) => {
    let buttonList =  [];
    for (let button of list) {
      if (button === 'Reset') {
        buttonList.push(<MenuItem key='Reset' onClick={this.gameReset}>Reset</MenuItem>);
      }
    }
    return buttonList;
  }
  render() {
    const { anchorEl } = this.state;
    const { classes, size, buttons } = this.props;
    return (
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.handleMenuClick}/>
            <Menu 
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuClose}
              className={classes.menu}
            >
              {this.addButtons(buttons)}
            </Menu>
          </IconButton>
          <Typography variant="title" color="inherit">
            Touch {size*size}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

GameMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledGameMenu = withStyles(styles)(GameMenu);
export default connect(mapStateToProps, mapDispatchToProps)(StyledGameMenu);