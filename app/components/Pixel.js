import React, { PropTypes } from 'react';

const Pixel = ({ onMouseOver, color }) => (
  <div
    onMouseOver={onMouseOver}
    style={{
      backgroundColor: color,
      height: '15px',
      width: '15px',
      margin: '0',
    }}
  />
);

Pixel.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Pixel;
