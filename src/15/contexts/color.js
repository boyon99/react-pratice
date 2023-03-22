import React, { createContext, useState } from 'react';

// createContext
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => { },
    setSubcolor: () => { }
  }
});

// ColorContext 이름 변경
const { Consumer: ColorConsumer } = ColorContext;


// Context.Provider
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;