import React from 'react';

function addButtons(list) {
  let buttonList =  [];
  for (let button of list) {
    if (button === 'Reset') {
      buttonList.push(<div key='Reset'>This is Reset</div>);
    }
  }
  return buttonList;
}

export default class Menu extends React.PureComponent {
  render() {
    return (
      <div>
        This is Menu
        {addButtons(this.props.buttons)}
      </div>
    );
  }
}
