import "bootstrap/dist/css/bootstrap.css";
import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const RelatedGridItem = (props) => {    
    const { setCurrentlySelectedItem } = useContext(GridContext)

    const displayDetailPanel = (e) => {

        var row = document.getElementsByClassName("row");        
        for (var i = 0; i < row.length; i++) {
            row[i].onclick = function() {
                hideAll();
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
        function hideAll() {
            for (var i = 0; i < row.length; i++) {
                row[i].classList.toggle("active", false);
                row[i].nextElementSibling.classList.toggle("show", false);
            }
        }

        e.preventDefault();
    }

    const setSelectedItem = () => {
        setCurrentlySelectedItem(props.item)
    }

    return (
        <div className="col" id='grid-item' onClick={setSelectedItem}>
            <div className="card-container" onClick={(e) => {displayDetailPanel(e)}}>
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
