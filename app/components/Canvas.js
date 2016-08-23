import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Pixel from './Pixel';
import { paintPixel, floodFillPixel, startPainting, stopPainting } from '../actions/index';

const Canvas = ({ canvas, handleMouseOver, handleMouseDown, handleMouseUp, handleClick }) => {
  const pixels = canvas.map((row, r) => {
    const pixelRow = row.map((color, c) => (
      <Pixel
        key={`r${r}c${c}`}
        color={color}
        onClick={() => handleClick(r, c)}
        onMouseOver={() => handleMouseOver(r, c)}
      />
    ));
    return <div>{pixelRow}</div>;
  });
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {pixels}
    </div>
  );
};

Canvas.propTypes = {
  canvas: PropTypes.array.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  canvas: state.canvas,
});

const mapDispatchToProps = (dispatch) => ({
  handleMouseOver: (row, col) => dispatch(paintPixel(row, col)),
  handleMouseDown: () => dispatch(startPainting()),
  handleMouseUp: () => dispatch(stopPainting()),
  handleClick: (row, col) => dispatch(floodFillPixel(row, col)),
});

const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);

export default CanvasContainer;
