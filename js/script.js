// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // We only run this code if the loginForm exists on the page
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the form from actually submitting to a server
            event.preventDefault();

            // Get the input elements
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const errorMessage = document.getElementById('error-message');

            // Get the values from the inputs
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // --- Simple Authentication Logic ---
            // In a real application, this would be a request to a server!
            // This is for demonstration purposes ONLY.

            if (username === 'admin' && password === 'admin123') {
                // Admin login successful
                alert('Admin login successful! Redirecting to the home page.');
                window.location.href = 'index.html'; // Redirect to the main page
            } else if (username === 'user' && password === 'user123') {
                // User login successful
                alert('User login successful! Redirecting to the home page.');
                window.location.href = 'index.html'; // Redirect to the main page
            } else {
                // Login failed
                errorMessage.textContent = 'Invalid username or password. Please try again.';
                errorMessage.style.display = 'block'; // Show the error message
            }
        });
    }
});
