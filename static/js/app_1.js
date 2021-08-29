// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function
function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Loop through each item on the data and then add a row to append the 
    // info onto the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Reference one object from the array
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });     
}

// Create a new function to handle a click
function handleClick() { 
    let date =  d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        // Show only the rows where the date is equal to the date filter we created above
        filteredData = filteredData.filter(row =>  row.datetime === date);
    };

    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);