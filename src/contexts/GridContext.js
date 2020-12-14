import React, { createContext, useState } from 'react';
export const GridContext = createContext();

const GridContextProvider = (props) => {
    const [currentlySelectedItem, setCurrentlySelectedItem] = useState('');
    // const [currentlySelectedRow, setCurrentlySelectedRow] = useState('');

    return (
        <GridContext.Provider value={{currentlySelectedItem, setCurrentlySelectedItem}}>
            {props.children}
        </GridContext.Provider> 
    )
}

export default GridContextProvider;
