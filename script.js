let counterValue = 0;

const counterElement = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterElement.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});

updateCounter();