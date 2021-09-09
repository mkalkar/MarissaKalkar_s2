
// Global variable with 60 attractions (JSON format)





function dataFiltering() {
	var attractions = attractionData;
	// sort the JSON array descending by Visitors and then filter the array to get the first five rows.
  //console.log(attractions);

	attractions.sort( function(a, b){
    return b.Visitors - a.Visitors;
	});

	var filteredNumericData = attractions.filter( function(value, index) {
    return (index < 5);
	});

	attractions = filteredNumericData;

	renderBarChart(attractions);

	//console.log(attractions);

}



	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
