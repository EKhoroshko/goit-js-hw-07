document.addEventListener('DOMContentLoaded', function () {

    const sub = document.querySelector("[data-action='decrement']");
    const add = document.querySelector("[data-action='increment']");
    const value = document.querySelector('#value');



    let counterValue = 0;
    function onClickTargetButtonDecrement() {
        counterValue -= 1;
        value.textContent = counterValue;
    }

    function onClickTargetButtonIncrement() {
        counterValue += 1;
        value.textContent = counterValue;
    }

    sub.addEventListener('click', onClickTargetButtonDecrement);
    add.addEventListener('click', onClickTargetButtonIncrement);
});