import React from 'react';
import '../styles/main.scss'

const App: React.FC = ({ children }) => {
  return <h1>Hello React {children}</h1>;
};

export default App;
