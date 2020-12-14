import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import RelatedGridRow from './RelatedGridRow';

const RelatedGridList = (props) => {
    const { currentlySelectedItem } = useContext(GridContext)
    // console.log('Context: ', currentlySelectedItem);
    return (
        <div className='container-fluid'> 
            {props.data.map((row, index) => {
                return(
                    <RelatedGridRow key={index} rowItems={row}/>
                );
            })}
        </div>
    )
}

export default RelatedGridList;