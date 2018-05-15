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

// Random values generated in startGame()
let values;
export function endCountDown() {
  clearInterval(gameCountDown);
  return {
    type: 'COUNTDOWN_END',
    payload: values,
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

function randomValues(size) {
  let values = Array.from({length: size * size}, (v, k) => k + 1);;

  // Do random shuffle
  for (let i = values.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

export function startGame(size) {
  let blocks = {};
  for (let i = 0; i < size * size; i++) {
    let blockInfo = {clicked: false, completed: false};
    blocks[i + 1] = blockInfo;
  }
  let defaultValues = Array.from({length: size * size}, (v, k) => k + 1);;
  values = randomValues(size);
  return {
    type: 'GAME_START',
    payload: {blocks: blocks, values: defaultValues},
  }
}

export function endGame() {
  endStopWatch();
  return {
    type: 'GAME_END',
  }
}

export function blockClick(value) {
  return {
    type: 'BLOCK_CLICK',
    payload: value,
  };
}