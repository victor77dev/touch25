const initialState = {
  start: {
    countDown: 3,
    startButton: 'Start',
    wait: true,
  },
  currentTime: 0,
  gameStarted: false,
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case 'COUNTDOWN_START': {
      return {...state,
        start: {...state.start,
          wait: false,
        },
      };
    }
    case 'COUNTDOWN_REDUCE': {
      return {...state,
        start: {...state.start,
          countDown: state.start.countDown - 1,
        },
      };
    }
    case 'COUNTDOWN_END': {
      return {...state,
        start: {...state.start,
          countDown: 3,
        },
        gameStarted: true,
      };
    }
    case 'STOPWATCH_START': {
      return {...state,
        currentTime: 0,
      }
    }
    case 'STOPWATCH_UPDATE': {
      return {...state,
        currentTime: action.payload,
      }
    }
    case 'GAME_END': {
      return {...state,
        start: {...state.start,
          startButton: 'Restart',
          wait: true,
        },
        gameStarted: false,
      };
    }
    case 'GAME_RESET': {
      return initialState;
    }
    default:
      // do nothing
  }
  return state;
}
