document.addEventListener('DOMContentLoaded', () => {
   
    //  Sliding Panel Toggle Logic
    
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');
    const authContainer = document.getElementById('authContainer');

    if (signUpBtn && signInBtn && authContainer) {
        signUpBtn.addEventListener('click', () => {
            authContainer.classList.add("right-panel-active");
        });

        signInBtn.addEventListener('click', () => {
            authContainer.classList.remove("right-panel-active");
        });
    }

   
    //  Form Submission & LocalStorage Authentication Logic
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Handle Login Submit
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('loginUsername').value.trim();
            const passwordInput = document.getElementById('loginPassword').value.trim();

            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            const matchedUser = users.find(u => 
                (u.email === usernameInput || u.name === usernameInput) && u.password === passwordInput
            );

            if (matchedUser) {
                localStorage.setItem('currentUser', JSON.stringify(matchedUser));
                alert(`Welcome back, ${matchedUser.name}! Login Successful.`);
                window.location.href = '6_home.html';
            } else {
                alert('Invalid Username/Email or Password!');
            }
        });
    }

    // Handle Signup Submit
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value.trim();
            const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = users.some(u => u.email === email);
            if (userExists) {
                alert('An account with this email already exists!');
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Account created successfully! Switching to Login...');
            
            // Clear inputs
            signupForm.reset();

            // Slide back to Login panel automatically
            if (authContainer) {
                authContainer.classList.remove("right-panel-active");
            }
        });
    }
});