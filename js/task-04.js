let counterValue = 0;
const valueRef = document.querySelector('#value');

const minusOneBth = document.querySelector(
    'button[data-action="decrement"]'
);
minusOneBth.addEventListener('click',() => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})

const plusOneBth = document.querySelector(
    'button[data-action="increment"]'
);
plusOneBth.addEventListener('click',() => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})