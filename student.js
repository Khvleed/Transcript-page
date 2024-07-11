document.addEventListener('DOMContentLoaded', () => {
    // Handle update profile form submission
    document.getElementById('update-profile-form').addEventListener('submit', event => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        updateProfile(firstName, lastName, email);
    });

    // Load transcript details
    loadTranscript();
});

// Function to update profile
function updateProfile(firstName, lastName, email) {
    // Update profile logic here (e.g., send to server, update UI)
    alert('Profile updated successfully.');
}

// Function to load transcript
function loadTranscript() {
    // Load transcript logic here (e.g., fetch from server)
    const transcriptDetails = document.getElementById('transcript-details');
    transcriptDetails.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Grade</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CS101</td>
                    <td>Introduction to Computer Science</td>
                    <td>A</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>MAT201</td>
                    <td>Calculus I</td>
                    <td>B+</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>ENG102</td>
                    <td>English Literature</td>
                    <td>A-</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    `;
}
