const submit = document.querySelector('.submit');
const firstWrap = document.querySelector('.first__wrapper');
const secondWrap = document.querySelector('.second__wrapper');
const numbers = document.querySelectorAll('.number__item');
const selectedText = document.querySelector('.selected-text');
let selectedNumber = 0;

numbers.forEach(item => {
    item.addEventListener('click', () => {
        selectedNumber = item.textContent.trim();
        numbers.forEach(num => {
            num.classList.remove('active');
        });
        item.classList.add('active');
    });
});

submit.addEventListener('click', () => {
    firstWrap.classList.add('hide');
    secondWrap.classList.remove('hide');

    selectedText.innerHTML = `You selected ${selectedNumber} out of 5`;
});