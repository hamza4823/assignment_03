let studentList = [];

function addStudent() {
    const name = $("#name").val();
    const email = $("#email").val();

    if (name && email) {
        const student = { name, email };
        studentList.push(student);
        displayStudents();
        $("#addForm")[0].reset();
    } else {
        alert("Please enter both name and email.");
    }
}

function deleteStudent(index) {
    studentList.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    const editedName = prompt("Enter the new name:");
    const editedEmail = prompt("Enter the new email:");

    if (editedName !== null && editedEmail !== null) {
        studentList[index] = { name: editedName, email: editedEmail };
        displayStudents();
    }
}

