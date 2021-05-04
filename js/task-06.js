const input = document.querySelector('#validation-input');
let inputLength = input.getAttribute('data-length');
let numbInputLength = parseInt(inputLength);

input.addEventListener('input', onInutChange);
function onInutChange(e) {
    console.log(numbInputLength);
    if (e.currentTarget.value.length <= numbInputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");

    } if (e.currentTarget.value.length === 0) {
        input.classList.remove("invalid");
        input.classList.remove("valid");

    } if (e.currentTarget.value.length > numbInputLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}