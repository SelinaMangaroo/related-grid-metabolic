import React from 'react';

const DetailPanel = (props) => {

    const closeDetailPanel = (e) => {
        var row = document.getElementsByClassName("row");
        for (var i = 0; i < row.length; i++) {
            row[i].classList.toggle("active", false);
            row[i].nextElementSibling.classList.toggle("show", false);
        }
        e.preventDefault();
    }
    
    return (  
        <div>
            <button type="button" className="close" aria-label="Close" onClick={(e) => {closeDetailPanel(e)}}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="grid-container">
                <div className='grid-item'>
                    {/* <div className='item-media' dangerouslySetInnerHTML= {{ __html: props.item.media[0].url}}/> */}
                    {/* <div className='item-media'>{props.item.media[0].url}</div> */}
                </div>
                <div className='grid-item'>
                    <div className='item-label' dangerouslySetInnerHTML= {{ __html: props.item.label }}/>
                    <div className='item-identifier' dangerouslySetInnerHTML= {{ __html: props.item.identifier }}/> 
                </div>
            </div>
            </div>
    )
}

export default DetailPanel;