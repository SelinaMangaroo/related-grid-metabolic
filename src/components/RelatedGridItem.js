import "bootstrap/dist/css/bootstrap.css";
import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const RelatedGridItem = (props) => {    
    const { setCurrentlySelectedItem } = useContext(GridContext)

    const displayDetailPanel = (e) => {
        setCurrentlySelectedItem(props.item)

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
        e.stopPropagation();
    }

    // const setSelectedItem = () => {
    //     setCurrentlySelectedItem(props.item)
    // }

    return (
        <div className="col" onClick={(e) => {displayDetailPanel(e)}}>
            <div className="card-container">
                <div className="image" dangerouslySetInnerHTML={{ __html: props.item.media[0].tag}} />
                <div className="caption" dangerouslySetInnerHTML={{__html: props.item.label}} /> 
            </div>
        </div>
    )
}

export default RelatedGridItem
