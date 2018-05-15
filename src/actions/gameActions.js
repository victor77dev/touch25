export function reduceCountDown() {
  return {
    type: 'COUNTDOWN_REDUCE'
  };
}

export function initCountDown() {
  return {
    type: 'COUNTDOWN_START'
  };
}

let gameCountDown;
export function startCountDown() {
  return dispatch => {
    dispatch(initCountDown());
    gameCountDown = setInterval(() => {
      dispatch(reduceCountDown())
    }, 1000);
  };
}

export function endCountDown() {
  clearInterval(gameCountDown);
  return {
    type: 'COUNTDOWN_END'
  };
}