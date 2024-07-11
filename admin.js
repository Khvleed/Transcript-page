document.addEventListener('DOMContentLoaded', () => {
    // Handle add student form submission
    document.getElementById('add-student-form').addEventListener('submit', event => {
        event.preventDefault();
        const studentID = event.target.studentID.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        addStudent(studentID, firstName, lastName, email);
    });

    // Handle add user form submission
    document.getElementById('add-user-form').addEventListener('submit', event => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const role = event.target.role.value;
        addUser(username, password, role);
    });

    // Populate students table
    loadStudents();

    // Populate users table
    loadUsers();
});

// Function to add student
function addStudent(studentID, firstName, lastName, email) {
    // Add student logic here (e.g., send to server, update table)
    const table = document.getElementById('students-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).innerText = studentID;
    row.insertCell(1).innerText = firstName;
    row.insertCell(2).innerText = lastName;
    row.insertCell(3).innerText = email;
    const actionsCell = row.insertCell(4);
    actionsCell.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';
}

// Function to add user
function addUser(username, password, role) {
    // Add user logic here (e.g., send to server, update table)
    const table = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).innerText = username;
    row.insertCell(1).innerText = role;
    const actionsCell = row.insertCell(2);
    actionsCell.innerHTML = '<button onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Delete</button>';
}

// Function to load students
function loadStudents() {
    // Load students logic here (e.g., fetch from server)
}

// Function to load users
