import React, { PropTypes } from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import { setColor, toggleColorPicker } from '../actions';

const ColorPicker = ({ handleChangeComplete, handleClick, color, displayColorPicker }) => (
  <div>
    <div
      onClick={handleClick}
      style={{
        padding: '5px',
        background: '#fff',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '2px',
          background: color,
        }}
      />
    </div>
    {
      displayColorPicker
      ? <div style={{ position: 'absolute', zIndex: '2' }} >
        <div
          onClick={handleClick}
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
          }}
        />
        <ChromePicker
          onChangeComplete={handleChangeComplete}
          color={color}
          displayColorPicker={displayColorPicker}
        />
      </div>
      : null
    }
  </div>
);

ColorPicker.propTypes = {
  handleChangeComplete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  displayColorPicker: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  color: state.color,
  displayColorPicker: state.displayColorPicker,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeComplete: (color) => dispatch(setColor(color.hex)),
  handleClick: () => dispatch(toggleColorPicker()),
});

const ColorPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);

export default ColorPickerContainer;
