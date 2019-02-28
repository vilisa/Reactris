export default {
    actions: {
      HARD_DROP: 'HARD_DROP',
      MOVE_DOWN: 'MOVE_DOWN',
      MOVE_LEFT: 'MOVE_LEFT',
      MOVE_RIGHT: 'MOVE_RIGHT',
      ROTATE: 'ROTATE',
      PAUSE: 'PAUSE'
    },
  
    states: {
      PAUSED: false,
      GAME_RESULT: 'GAME_RESULT'
    },
  
    events: {
      LINE_CLEARED: 'LINE_CLEARED',
      PLAYER_LOST: 'PLAYER_LOST'
    },
  
    // dimensions in "blocks"
    GAME_WIDTH: 10,
    GAME_HEIGHT: 16
  };