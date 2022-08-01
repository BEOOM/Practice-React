import React from 'react';
import ColorBox from './ColorBox';
import ColorContext from './color';
import { ColorProvider } from './color';
import SelectColors from './SelectColors';

const App15 = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App15;
