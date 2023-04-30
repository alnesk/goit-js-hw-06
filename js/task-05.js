const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


const ref = {
    input,
    output,
  };
ref.input.addEventListener("input", onInputChange);

function onInputChange(e) {
    const inputVal = e.target.value.trim();
    ref.output.textContent = inputVal ? inputVal : "Anonymous"
};