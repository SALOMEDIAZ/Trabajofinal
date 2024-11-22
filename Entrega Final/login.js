const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (!email || !password) {
        return alert('Por favor, complete ambos campos antes de continuar');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }
    alert("Bienvenido a TaZarte " + validUser.firstName);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = '../Myaccountpage/account.html';  
});
function redirectToSignUp() {
    window.location.href = "registro.html";
}
function redirectToIndex() {
    window.location.href = "index.html";
}
