const input = document.querySelector('#validation-input');
let inputLength = input.getAttribute('data-length');
let numbInputLength = parseInt(inputLength);

input.addEventListener('input', onInutChange);
function onInutChange(e) {

    if (e.currentTarget.value.length <= numbInputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");

    } if (e.currentTarget.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length > numbInputLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}



