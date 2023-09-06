// Attach event listeners to buttons
document.getElementById("signup-button").addEventListener("click", Signup);
document.getElementById("login-button").addEventListener("click", login);
document.getElementById("connect-button").addEventListener("click", connect);
document.getElementById("disconnect-button").addEventListener("click", disconnect);

function Signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all the fields.");
        return; 
    }

    alert("Registration successful!");

    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Check if email id and password is correct or not
    if ( !email || !password) {
        alert("Please fill in all the fields.");
        return;
    }
    if (email === "xyz@gmail.com" && password === "xyz@123") {
        alert("Login successful!");

        window.location.href = "connect.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}



function connect() {
    // Perform page connection logic here with Facebook API
    alert("Facebook Page connected!");
}

function disconnect() {
    // Perform page disconnection logic here Facebook API
    alert("Facebook Page disconnected!");
}
