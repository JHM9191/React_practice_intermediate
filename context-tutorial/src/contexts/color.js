import { createContext } from 'react';

const ColorContext = createContext({ color: 'black', border: '1px solid #FF0000'});

export default ColorContext;