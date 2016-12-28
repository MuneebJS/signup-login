var signUp_userEmail = document.getElementById('user-email-signup');
var signUp_userName = document.getElementById('user-name-signup');
var signUp_userPass = document.getElementById('user-pass-signup');
var signUp_form = document.getElementById('form-signup');
var signUp_container = document.getElementById('sign-up');
var signUp_btn = document.getElementById('btn-signup');
var logIn_container = document.getElementById('log-in');
var logIn_userEmail = document.getElementById('user-email-login');
var logIn_userPass = document.getElementById('user-pass-login');
var logIn_btn = document.getElementById('btn-login');
var logIn_form = document.getElementById('form-login')
var congrats_container = document.getElementById('congrats');

//this function will create object for user info through inputs and then push them into the sessionStorage 
signUp_btn.addEventListener('click', function () {
    userInfo = {
        email: signUp_userEmail.value,
        name: signUp_userName.value,
        password: signUp_userPass.value
    }
    sessionStorage.userEmail = userInfo.email;
    sessionStorage.userName = userInfo.name;
    sessionStorage.userPassword = userInfo.password;
    // console.log(sessionStorage.getItem("userEmail"));
}, false)

//when user click on sign up button hide the sign up form and show login form 
signUp_btn.addEventListener('click', function () {
    if (signUp_userEmail.value != '' && signUp_userName != '' && signUp_userPass.value != '') {
        signUp_container.className = 'hidden';
        logIn_container.className = 'show';
    }
    else {
        alert("please fill out input fields");
    }
}, false)


// when user click on login button get email and pass from session storage and match with the email and pass provided by user in login
// form if email and pass matched hide the login form and show him congrats
logIn_btn.addEventListener('click', function () {
    var email = sessionStorage.getItem('userEmail');
    var pass = sessionStorage.getItem('userPassword');
    if (logIn_userEmail.value == email && logIn_userPass.value == pass) {
        logIn_container.className = 'hidden';
        congrats_container.className = 'show';
    }
    else {
        alert('It looks like your pass or email is wrong');
    }
    console.log(logIn_userEmail.value + " " + email + ' ' + logIn_userPass.value + " " + pass);
})