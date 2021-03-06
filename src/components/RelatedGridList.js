import React, { useEffect, useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import RelatedGridRow from './RelatedGridRow';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

function getGraphQLClient(uri, options=null) {
	const httpLink = createHttpLink({
		uri: uri
	});
	
	const client = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache()
	});
	
	return client;
}

const RelatedGridList = (props) => {
	const { data, setData, currentlySelectedItem } = useContext(GridContext)
	console.log('Context: ', 'data:', data, 'currentlySelectedItem:', currentlySelectedItem);
    
	useEffect(() => {
		const client = getGraphQLClient('http://metabolic3.whirl-i-gig.com:8085/service.php/RelatedGrid');
	
		client.query({
			query: gql`
				query { content(id: 22848, table: "ca_objects", gridTable: "ca_objects", fetch: "children", mediaVersions: ["small", "medium"])
				{ items { id, label, identifier, detailPageUrl, media { version, url, tag, width, height, mimetype} } , created }}
			`})
			.then(function(result) {
				// console.log("Data was received:", result);

				// Code to convert feed to data format used by grid goes here
				var items = result.data.content.items;
				var size = 6; var arrayOfArrays = [];

				for(var i = 0; i < items.length; i+=size){
					arrayOfArrays.push(items.slice(i, i+size))
				}
				setData(arrayOfArrays)
			});
	}, [setData]);
	
    return (
        <div className='container-fluid'> 
            {data.map((row, index) => {
                return(<RelatedGridRow key={index} rowItems={row}/>)
            })}
        </div>
    )
}

export default RelatedGridList;