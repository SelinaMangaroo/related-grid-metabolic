import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const DetailPanel = (props) => {

    const { } = useContext(GridContext)

    const closeDetailPanel = (e) => {
        var row = document.getElementsByClassName("row");
        for (var i = 0; i < row.length; i++) {
            row[i].classList.toggle("active", false);
            row[i].nextElementSibling.classList.toggle("show", false);
        }
        e.preventDefault();
    }
    
    return (  
        <>
            <button type="button" className="close" aria-label="Close" onClick={(e) => {closeDetailPanel(e)}}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="details-container">
                <div dangerouslySetInnerHTML= {{ __html: props.item.media_tag_link }}/>
                <div dangerouslySetInnerHTML= {{ __html: props.item.caption }}/> 
            </div>
        </>
    )
}

export default DetailPanel;