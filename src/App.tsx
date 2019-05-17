import React, { FC } from 'react';
import './App.css';

import Map from './components/map';
import Search from './components/search';

const App: FC = () => {
  return (
    <div className="App">
      <Search />
      <Map />
    </div>
  );
};

export default App;
