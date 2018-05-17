const initialState = {
  start: {
    countDown: 3,
    startButton: 'Start',
    wait: true,
  },
  blocks: {},
  currentTime: 0,
  gameStarted: false,
  gameEnd: false,
  nextClick: 1,
  values: [],
  records: [],
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case 'COUNTDOWN_START': {
      return {...state,
        start: {...state.start,
          wait: false,
        },
        currentTime: 0,
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
        values: action.payload,
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
    case 'GAME_START': {
      return {...state,
        blocks: action.payload.blocks,
        values: action.payload.values,
        gameEnd: false,
      }
    }
    case 'GAME_END': {
      return {...state,
        start: {...state.start,
          startButton: 'Restart',
          wait: true,
        },
        gameStarted: false,
        gameEnd: true,
      };
    }
    case 'GAME_RESET': {
      return initialState;
    }
    case 'BLOCK_CLICK': {
      let blockNo = action.payload;
      return {...state,
        blocks: {...state.blocks,
          [blockNo]: {...state.blocks[blockNo], clicked: true},
        }
      };
    }
    case 'BLOCK_RESET': {
      let blockNo = action.payload;
      return {...state,
        blocks: {...state.blocks,
          [blockNo]: {...state.blocks[blockNo], incorrect: null},
        }
      };
    }
    case 'CLICK_UPDATE': {
      return {...state, nextClick: action.payload};
    }
    case 'RECORD_ADD': {
      return {...state, records: [...state.records, action.payload]};
    }
    default:
      // do nothing
  }
  return state;
}
