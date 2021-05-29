const input = document.querySelector('#validation-input');

input.addEventListener('input', onInutChange);
function onInutChange(e) {
    const correctLength = this.dataset.length;
    if (e.currentTarget.value.length <= correctLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");

    } if (e.currentTarget.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length > correctLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

/* const input = document.querySelector('#validation-input');

input.addEventListener('input', onInutChange);
function onInutChange(e) {
    const correctLength = this.dataset.length;
    if (e.currentTarget.value.length < correctLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");

    } if (e.currentTarget.value.length == correctLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length > correctLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
} */

