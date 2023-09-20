let curRow=3;
function insert_Row() {
    //Write your code here
  const newRow=document.createElement("tr");
  	

	newRow.innerHTML=`<td>Row${curRow} cell1</td>
        <td>Row${curRow++} cell2</td>`
	
  const table1=document.getElementById("sampleTable")
  table1.appendChild(newRow);	

	
}
