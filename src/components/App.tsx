import React from 'react';
import '../styles/main.scss';

import SearchBar from './SearchBar/SearchBar';
import Cards from './Cards/Cards';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchBar />
      <Cards />
    </div>
  );
};

export default App;
