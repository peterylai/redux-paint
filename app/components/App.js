import React from 'react';
import Canvas from './Canvas';
import ClearButton from './ClearButton';
import ColorPicker from './ColorPicker';
import ModeSelector from './ModeSelector';

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
    <ModeSelector />
    <Canvas />
  </div>
);

export default App;
