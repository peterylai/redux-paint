import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPaintMode } from '../actions/index';

const ModeButton = ({ buttonMode, mode, handleClick }) => (
  <button
    onClick={() => handleClick(buttonMode)}
    style={{
      backgroundColor: mode === buttonMode ? 'green' : 'grey',
      margin: '5px',
    }}
  >
    {buttonMode}
  </button>
);

ModeButton.propTypes = {
  mode: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonMode: PropTypes.string.isRequired,
};

const ModeSelector = (props) => (
  <div>
    <ModeButton {...props} buttonMode="PAINT" />
    <ModeButton {...props} buttonMode="BUCKET" />
  </div>
);

const mapStateToProps = (state) => ({
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (mode) => dispatch(setPaintMode(mode)),
});

const ModeSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSelector);

export default ModeSelectorContainer;
