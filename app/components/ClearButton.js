import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { clearCanvas } from '../actions';

const ClearButton = ({ dispatch }) => (
  <button
    onClick={() => dispatch(clearCanvas())}
    style={{ fontSize: '20px', margin: '10px' }}
  >
    Clear
  </button>
);

ClearButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const ClearButtonContainer = connect()(ClearButton);

export default ClearButtonContainer;
