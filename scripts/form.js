
const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;

    if(login == "123" && password == "123"){
        alert('Deu boa !!!');
    }
});

