import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const DetailPanel = (props) => {

    const {setIsDetailPanelOpen, setPanelCount} = useContext(GridContext)

    const closeDetailPanel = (e, row) => {
        setPanelCount(0);
        setIsDetailPanelOpen(false)
        var elem = document.getElementById(row);
        if(elem){
            elem.style.display = "none"
        }
        e.preventDefault();
    }
    return (  
        <div className='detail-panel'>
            <button type="button" className="close" aria-label="Close" onClick={(e) => {closeDetailPanel(e, props.row)}}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="detail-panel-container">
                <div className="main-image">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: props.item.media_tag_link,
                        }}
                        />
                </div>
                <div className="main-image-caption">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: props.item.caption,
                        }}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default DetailPanel;