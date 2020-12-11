import React, { createContext, useState } from 'react';
export const GridContext = createContext();

const GridContextProvider = (props) => {
    const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false);
    const [currentlySelectedItem, setCurrentlySelectedItem] = useState('');
    const [panelCount, setPanelCount] = useState(0);

    return (
        <GridContext.Provider value={{panelCount, setPanelCount, isDetailPanelOpen, setIsDetailPanelOpen, currentlySelectedItem, setCurrentlySelectedItem}}>
            {props.children}
        </GridContext.Provider> 
    )
}

export default GridContextProvider;
