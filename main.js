function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function loginUser() {
    alert('Login logic goes here!');
    return false; 
}

function signupUser() {
    alert('Signup logic goes here!');
    return false; 
}