const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');

});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('.form-box.login form');
    const loggedInUserDiv = document.getElementById('loggedInUser');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const loggedInUsername = getUsernameFromEmail(loginEmail);

        // Muestra el usuario en el elemento div
        loggedInUserDiv.textContent = `Logged in as: ${loggedInUsername}`;

        // Oculta el formulario de login y muestra el usuario
        document.querySelector('.form-box.login').style.display = 'none';
        loggedInUserDiv.style.display = 'block';
    });

});

function getUsernameFromEmail(email) {
    // Por ejemplo, puedes asumir que el nombre de usuario es la parte antes de '@' en el correo electrónico.
    return email.split('@')[0];
}

