const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form-email');
const inputError = document.querySelector('.form-error');
//validador de formato email
const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

form.addEventListener('submit', (event) => {

    if (regExp.test(inputEmail.value) == true) {
        // event.preventDefault();
        inputEmail.style.border = '2px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
        inputError.innerHTML = '';
        // console.log("ok");
    }
    else {
        event.preventDefault();
        inputEmail.style.border = '2px solid #f00'
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
        inputError.innerHTML = 'Please provide a valid email'
        // console.log("error");
    }
});