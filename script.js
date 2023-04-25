var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["male"] = document.getElementById("male").value;
    formData["female"] = document.getElementById("female").value;
    formData["other"] = document.getElementById("other").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["class"] = document.getElementById("class").value;

    formData["mobile"] = document.getElementById("mobile").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("studentform").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.rollno;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.male;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.dob;

    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.class;

     cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.mobile;

    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("male").value = selectedRow.cells[2].innerHTML;
    document.getElementById("female").value = selectedRow.cells[3].innerHTML;
    document.getElementById("other").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
    document.getElementById("class").value = selectedRow.cells[6].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.male;
    selectedRow.cells[3].innerHTML = formData.female;
    selectedRow.cells[4].innerHTML = formData.other;
    selectedRow.cells[5].innerHTML = formData.dob;
    selectedRow.cells[6].innerHTML = formData.class;
    selectedRow.cells[7].innerHTML = formData.mobile;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studentform').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("rollno").value = '';
    document.getElementById("male").value = '';
    document.getElementById("female").value = '';
    document.getElementById("other").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("class").value = '';
    document.getElementById("mobile").value = '';
   
    selectedRow = null;
}

const dateInput = document.getElementById("my-date-input");
const today = new Date();
const maxDate = new Date(today.getTime() + (60 * 24 * 60 * 60 * 1000)); // 60 days from today

if (today > maxDate) {
  dateInput.setAttribute("disabled", true);
  
}
