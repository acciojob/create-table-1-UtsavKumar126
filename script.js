
function insert_Row() {
    // Create a new row element
	const curTableRow = document.getElementsByTagName("TR")[0];
    const newRow = document.createElement("tr");

    // Set the innerHTML of the new row with two cells
    newRow.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`;

    // Get a reference to the table by its ID
    //const table1 = document.getElementById("sampleTable");

    // Insert the new row before the current row
    document.getElementsByTagName("TABLE")[0].children[0].insertBefore(newRow, curTableRow);

    // Update the current row to be the newly inserted ro
}

