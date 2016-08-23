export const paintCell = (canvas, row, col, color) => (
  canvas.map((group, r) => (
    group.map((prevColor, c) => (
      row === r && col === c ? color : prevColor)
    ))
  )
);

export const floodFill = (canvas, row, col, prevColor, newColor) => {
  if (
        row < 0 ||
        row >= canvas.length ||
        col < 0 ||
        col >= canvas[0].length ||
        canvas[row][col] !== prevColor ||
        prevColor === newColor
      ) {
    return canvas;
  }
  const newCanvas = paintCell(canvas, row, col, newColor);
  return floodFill(
            floodFill(
              floodFill(
                floodFill(newCanvas, row - 1, col, prevColor, newColor),
              row + 1, col, prevColor, newColor),
            row, col - 1, prevColor, newColor),
          row, col + 1, prevColor, newColor);
};
