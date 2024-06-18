 // Wait for the DOM to be fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.getElementById('bookingForm');

    // Add a listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form fields
        if (validateForm()) {
            // If the form is valid, submit it (this is where you would send data to a server)
            submitForm();
        }
    });

    // Function to validate the form
    function validateForm() {
        // Basic validation - check if all required fields are filled
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value.trim();
        const time = document.getElementById('time').value.trim();
        const guests = document.getElementById('guests').value.trim();

        if (fullName === '' || email === '' || phone === '' || date === '' || time === '' || guests === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        // Additional validation can be added here (e.g., format validation for email, phone number, date, etc.)

        return true;
    }

    // Function to submit the form (you can modify this to send data to a server)
    function submitForm() {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    }
});
