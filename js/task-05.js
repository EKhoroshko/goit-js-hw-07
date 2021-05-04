
const inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onInputChange);
function onInputChange(e) {
    if (inputRef.value === "") {
        outputRef.textContent = 'Незнакомец';
    } else {
        outputRef.textContent = e.currentTarget.value;
    }

}




