export const paintPixel = (row, col) => ({
  type: 'PAINT_PIXEL',
  row,
  col,
});

export const clearCanvas = () => ({
  type: 'CLEAR_CANVAS',
});

export const toggleColorPicker = () => ({
  type: 'TOGGLE_COLOR_PICKER',
});

export const setColor = (color) => ({
  type: 'SET_COLOR',
  color,
});

export const startPainting = () => ({
  type: 'START_PAINTING',
});

export const stopPainting = () => ({
  type: 'STOP_PAINTING',
});
