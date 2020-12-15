import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import RelatedGridItem from './RelatedGridItem'
import DetailPanel from './DetailPanel';

const RelatedGridRow = (props) => {
    const { currentlySelectedItem } = useContext(GridContext)
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
                {
                    props.rowItems.map((item, index) => {
                        return(
                            <RelatedGridItem key={index} item={item} />
                        )
                    })
                }
            </div>
            
            <div className='panel' >
                <DetailPanel item={currentlySelectedItem}/>
            </div>
        </>
    )
}

export default RelatedGridRow;
