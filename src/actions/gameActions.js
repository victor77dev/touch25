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

let gameStopWatch, startTime;
export function initStopWatch() {
  startTime = new Date().getTime();
  return {
    type: 'STOPWATCH_START'
  };
}

export function updateStopWatch() {
  let now = new Date().getTime();
  let gameTime = now - startTime;
  return {
    type: 'STOPWATCH_UPDATE',
    payload: gameTime,
  };
}

export function startStopWatch() {
  return dispatch => {
    dispatch(initStopWatch());
    gameStopWatch = setInterval(() => {
      dispatch(updateStopWatch())
    }, 1);
  };
}

export function endStopWatch() {
  clearInterval(gameStopWatch);
}