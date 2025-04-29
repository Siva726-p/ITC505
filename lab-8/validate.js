document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validation: empty fields
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('All fields must be filled!');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Basic XSS protection
        const invalidChars = /[<>]/;
        if (invalidChars.test(firstName) || invalidChars.test(lastName) || invalidChars.test(email)) {
            alert('Input contains invalid characters (< or > are not allowed).');
            return;
        }

        // Simulate successful submission
        resultMessage.textContent = "Form submitted successfully (simulated).";
    });
});
