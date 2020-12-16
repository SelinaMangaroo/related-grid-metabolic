import './index.css';
import React from 'react';
import GridContextProvider from './contexts/GridContext';
import RelatedGridList from './components/RelatedGridList';

function App() {
  return (
    <div className="App">
      <GridContextProvider>
        <RelatedGridList/>
      </GridContextProvider>
    </div>
  );
}

export default App;
