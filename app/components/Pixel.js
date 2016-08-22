import React, { PropTypes } from 'react';

const Pixel = ({ onMouseOver, onClick, color }) => (
  <div
    onClick={onClick}
    onMouseOver={onMouseOver}
    style={{
      backgroundColor: color,
      height: '20px',
      width: '20px',
      margin: '0',
    }}
  />
);

Pixel.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Pixel;
