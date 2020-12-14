import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const DetailPanel = (props) => {

    const { } = useContext(GridContext)

    const closeDetailPanel = (e) => {
        var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].classList.toggle("active", false);
            acc[i].nextElementSibling.classList.toggle("show", false);
        }
        e.preventDefault();
    }

    // style={{ paddingTop: '2cm', margin: '0 auto', width: '280px', height: '180px', textAlign: 'center'}}
    
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