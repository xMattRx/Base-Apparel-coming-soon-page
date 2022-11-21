let input = document.getElementsByTagName('input')[0];
let form = document.getElementsByTagName('form')[0];
let messageError = document.getElementsByClassName('error')[0];
let iconError = document.getElementsByClassName('icon-error')[0];

function ValidateEmail(e) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!input.value.match(validRegex)) {
        input.style.border = '2px solid hsl(0, 93%, 68%)';
        messageError.style.display = 'flex';
        iconError.style.display = 'flex';
    } else {
        input.style.border = '1px solid hsl(0, 27%, 73%)';
        messageError.style.display = 'none';
        iconError.style.display = 'none';
    }

}

form.addEventListener('submit', event => {
    event.preventDefault()
    ValidateEmail()
})

