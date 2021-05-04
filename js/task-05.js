
const inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onInutChange);
function onInutChange(e) {
    if (inputRef.value === "") {
        outputRef.textContent = 'Незнакомец';
    } else {
        outputRef.textContent = e.currentTarget.value;
    }

}




