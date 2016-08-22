const initialState = {
  grid: new Array(20).fill(new Array(20).fill('#ddd')),
  mode: 'PAINT',
  color: '#00f',
  isPainting: false,
  displayColorPicker: false,
};

const floodFill = (grid, row, col, prevColor, newColor) => {
  if (row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] !== prevColor ||
      prevColor === newColor
      ) {
    return grid;
  }
  const newGrid = grid.map((group, r) => (
                    group.map((cell, c) => (
                      row === r && col === c ? newColor : cell)
                    ))
                  );
  return floodFill(
            floodFill(
              floodFill(
                floodFill(newGrid, row - 1, col, prevColor, newColor),
              row + 1, col, prevColor, newColor),
            row, col - 1, prevColor, newColor),
          row, col + 1, prevColor, newColor);
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
    case 'FLOOD_FILL_PIXEL':
      if (state.mode === 'BUCKET') {
        return Object.assign({}, state, {
          grid: floodFill(
                  state.grid,
                  action.row,
                  action.col,
                  state.grid[action.row][action.col],
                  state.color
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
    case 'SET_PAINT_MODE':
      return Object.assign({}, state, { mode: action.mode });
    default:
      return state;
  }
}

export default paintApp;
