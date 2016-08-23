import { paintCell, floodFill } from './helpers';

const initialState = {
  canvas: new Array(20).fill(new Array(20).fill('#ddd')),
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
          canvas: paintCell(state.canvas, action.row, action.col, state.color),
        });
      }
      return state;
    case 'FLOOD_FILL_PIXEL':
      if (state.mode === 'BUCKET') {
        return Object.assign({}, state, {
          canvas: floodFill(
                    state.canvas,
                    action.row,
                    action.col,
                    state.canvas[action.row][action.col],
                    state.color
                  ),
        });
      }
      return state;
    case 'CLEAR_CANVAS':
      return Object.assign({}, state, { canvas: initialState.canvas });
    case 'SET_PAINT_MODE':
      return Object.assign({}, state, { mode: action.mode });
    case 'START_PAINTING':
      return Object.assign({}, state, { isPainting: true });
    case 'STOP_PAINTING':
      return Object.assign({}, state, { isPainting: false });
    case 'TOGGLE_COLOR_PICKER':
      return Object.assign({}, state, { displayColorPicker: !state.displayColorPicker });
    case 'SET_COLOR':
      return Object.assign({}, state, { color: action.color });
    default:
      return state;
  }
}

export default paintApp;
