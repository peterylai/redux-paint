const initialState = {
  grid: new Array(30).fill(new Array(30).fill('#ddd')),
  mode: 'PAINT',
  color: '#00f',
  isPainting: false,
  displayColorPicker: false,
};

function paintApp(state = initialState, action) {
  switch (action.type) {
    case 'PAINT_PIXEL':
      if (state.mode === 'PAINT' && state.isPainting) {
        return Object.assign({}, state, {
          grid: state.grid.map((row, r) => (
            row.map((cell, c) => (
              action.row === r && action.col === c ? state.color : cell)
            ))
          ),
        });
      }
      return state;
    case 'START_PAINTING':
      return Object.assign({}, state, { isPainting: true });
    case 'STOP_PAINTING':
      return Object.assign({}, state, { isPainting: false });
    case 'TOGGLE_COLOR_PICKER':
      return Object.assign({}, state, { displayColorPicker: !state.displayColorPicker });
    case 'SET_COLOR':
      return Object.assign({}, state, { color: action.color });
    case 'CLEAR_CANVAS':
      return Object.assign({}, state, { grid: initialState.grid });
    default:
      return state;
  }
}

export default paintApp;
