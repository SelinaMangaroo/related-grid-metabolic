import './index.css';
import itemData from './data';
import React, { useState } from 'react';
import GridContextProvider from './contexts/GridContext';
import RelatedGridList from './components/RelatedGridList';

function App() {
  const [data, setData] = useState(itemData);

  return (
    <div className="App">
      <GridContextProvider>
        <RelatedGridList data={data}/>
      </GridContextProvider>
    </div>
  );
}

export default App;
