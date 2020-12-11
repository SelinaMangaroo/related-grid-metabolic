import "bootstrap/dist/css/bootstrap.css";
import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const RelatedGridItem = (props) => {    
    const { setCurrentlySelectedItem, setIsDetailPanelOpen, panelCount, setPanelCount} = useContext(GridContext)

    const displayDetailPanel = (e, row, item) => {
        setIsDetailPanelOpen(true)
        var elem = document.getElementById(row);
        if(elem && panelCount === 0){
            elem.style.display = "block"
        }
        setPanelCount(1);
        e.preventDefault();
    }

    const setSelectedItem = () => {
        setCurrentlySelectedItem(props.item)
    }

    return (
        <div className="col" onClick={setSelectedItem}>
            <div className="card-container" onClick={(e) => {displayDetailPanel(e, props.row)}}>
                <div className="card border-0">
                    <div
                        className="img"
                        dangerouslySetInnerHTML={{
                        __html: props.item.media_tag_link,
                        }}
                    />
                    <div className="card-body">
                        <div className="card-text">
                            <div
                                className="caption"
                                dangerouslySetInnerHTML={{
                                __html: props.item.caption,
                                }}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedGridItem
