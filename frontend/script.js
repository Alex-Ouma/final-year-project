// Signup functionality
const signupButton = document.getElementById('signupButton');
const usernameInput = document.getElementById('username');
const signupEmailInput = document.getElementById('signupEmail');
const signupPasswordInput = document.getElementById('signupPassword');
const signupResultDiv = document.getElementById('signupResult');
const usernameError = document.getElementById('usernameError');
const signupEmailError = document.getElementById('signupEmailError');
const signupPasswordError = document.getElementById('signupPasswordError');
const showLoginLink = document.getElementById('showLoginLink');
const showSignupLink = document.getElementById('showSignupLink');
const signupSection = document.getElementById('signupSection');
const loginSection = document.getElementById('loginSection');
const composeEmailSection = document.getElementById('composeEmailSection');

signupButton.addEventListener('click', () => {
    // Clear previous errors
    usernameError.textContent = "";
    signupEmailError.textContent = "";
    signupPasswordError.textContent = "";
    signupResultDiv.textContent = "";

    const username = usernameInput.value;
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    // Basic input validation (add more robust checks as needed)
    if (!username) {
        usernameError.textContent = "Please enter a username.";
        return;
    }
    if (!email) {
        signupEmailError.textContent = "Please enter an email address.";
        return;
    }
    if (!password) {
        signupPasswordError.textContent = "Please enter a password.";
        return;
    }

    // Send signup request to backend (replace with your actual API endpoint)
    fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            signupResultDiv.textContent = "Signup successful!";
            // Optionally, automatically log the user in after successful signup
        } else {
            signupResultDiv.textContent = data.message;
        }
    })
    .catch(error => {
        signupResultDiv.textContent = "An error occurred: " + error;
    });
});

showLoginLink.addEventListener('click', () => {
    signupSection.style.display = 'none';
    loginSection.style.display = 'block';
    composeEmailSection.style.display = 'none';
});

// ... (Add login functionality code here, similar to the signup code) ...

showSignupLink.addEventListener('click', () => {
    signupSection.style.display = 'block';
    loginSection.style.display = 'none';
    composeEmailSection.style.display = 'none';
});