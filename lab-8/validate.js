document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Empty fields check
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('All fields must be filled!');
            event.preventDefault();
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            event.preventDefault();
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
            return;
        }

        // Basic XSS Prevention
        if (/[<>]/.test(firstName) || /[<>]/.test(lastName) || /[<>]/.test(email)) {
            alert('Input contains invalid characters.');
            event.preventDefault();
        }
    });
});
