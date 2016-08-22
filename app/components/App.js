import React from 'react';
import Canvas from './Canvas';
import ClearButton from './ClearButton';
import ColorPicker from './ColorPicker';

const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h1>Paintr Redux</h1>
    <ColorPicker />
    <ClearButton />
    <Canvas />
  </div>
);

export default App;
