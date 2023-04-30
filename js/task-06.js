const input = document.getElementById('validation-input');

input.addEventListener('blur', addBorderColor);

const dataLen = input.getAttribute('data-length');


function addBorderColor(e) {
    const valueLen = e.target.value.trim().length;
    if (Number(dataLen) === valueLen) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}