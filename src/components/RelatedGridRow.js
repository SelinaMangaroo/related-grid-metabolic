import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import RelatedGridItem from './RelatedGridItem'
import DetailPanel from './DetailPanel';

const RelatedGridRow = (props) => {
    const { currentlySelectedItem } = useContext(GridContext)
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
                {
                    props.rowItems[0].map((item, index) => {
                        return(
                            <RelatedGridItem key={index} row={props.row} item={item} />
                        )
                    })
                }
            </div>
            <div id={props.row} style={{display: 'none'}}>
                <DetailPanel row={props.row} item={currentlySelectedItem}/>
            </div>
        </div>
    )
}

export default RelatedGridRow;
