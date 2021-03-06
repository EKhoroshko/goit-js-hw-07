//Напиши скрипт, который реагирует на изменение значения
//input#font - size - control(событие input) и изменяет инлайн - стиль span#text
//обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.value = 16;
input.addEventListener('input', onInutChange);

function onInutChange(e) {
    text.style.fontSize = e.currentTarget.value + "px";
}
