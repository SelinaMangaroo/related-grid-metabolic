import React, { createContext, useState } from 'react';
export const GridContext = createContext();

const GridContextProvider = (props) => {
    const [currentlySelectedItem, setCurrentlySelectedItem] = useState('');
    const [data, setData] = useState([]);

    return (
        <GridContext.Provider value={{currentlySelectedItem, setCurrentlySelectedItem, data, setData}}>
            {props.children}
        </GridContext.Provider>
    )
}

export default GridContextProvider;
