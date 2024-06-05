document.getElementById('studentBtn').addEventListener('click', function() {
    document.getElementById('studentForm').classList.add('active');
    document.getElementById('teacherForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('teacherBtn').classList.remove('active');
});

document.getElementById('teacherBtn').addEventListener('click', function() {
    document.getElementById('teacherForm').classList.add('active');
    document.getElementById('studentForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('studentBtn').classList.remove('active');
});

function loginTeacher() {
    event.preventDefault();
    var email = document.getElementById('teacherEmail').value;
    var password = document.getElementById('teacherPassword').value;
    if (email.includes("faculty.edu")) {
        alert("Login successful for Teacher.");
        console.log("Logged in Teacher:", email, password);
        window.location.href = './teacherDash.html'; // Redirect to teacher dashboard
    } else {
        alert("Invalid email. Only faculty email addresses allowed.");
    }
}

function loginStudent() {
    event.preventDefault();
    var email = document.getElementById('studentEmail').value;
    var password = document.getElementById('studentPassword').value;
    if (email.includes(".edu")) {
        alert("Login successful for Student.");
        console.log("Logged in Student:", email, password);
        window.location.href = './studentDash.html'; // Redirect to student dashboard or appropriate page
    } else {
        alert("Invalid email. Only student email addresses allowed.");
    }
}

