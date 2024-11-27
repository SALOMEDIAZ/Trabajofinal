const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;


    if (!firstName || !lastName || !phoneNumber || !email || !password || !confirmPassword) {
        return alert('Por favor, completa todos los campos');
    }

    if (password !== confirmPassword) {
        return alert('Las contraseñas no coinciden');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        alert('El usuario ya está registrado. Serás redirigido al inicio de sesión.');
    } else {
        Users.push({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(Users));
        alert('Registro Exitoso. Serás redirigido al inicio de sesión.');
    }
    
    window.location.href = '../Login/login.html'; 
});
function redirectToIndex() {
    window.location.href = "../index.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}