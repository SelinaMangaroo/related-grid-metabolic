import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import RelatedGridRow from './RelatedGridRow';

const RelatedGridList = (props) => {
    const { isDetailPanelOpen, currentlySelectedItem, panelCount } = useContext(GridContext)
    // console.log('Context: ', isDetailPanelOpen, currentlySelectedItem, panelCount);
    return (
        <div className="container-fluid">
            {props.data.map((row, index) => {
                return(
                    <RelatedGridRow key={index} row={Object.keys(row)} rowItems={Object.values(row)}/>
                );
            })} 
        </div>
    )
}

export default RelatedGridList;