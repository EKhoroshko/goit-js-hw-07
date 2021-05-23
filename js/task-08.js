

/*const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
    let amount = + document.querySelector("#controls input").value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const basicSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let size = basicSize + i * 10;
        const div = document.createElement("div");
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

function random() {
    return Math.floor(Math.random() * 256);
}*/

const refs = {
    body: document.body,
    input: document.createElement("input"),
    btnCreate: document.createElement("button"),
    btnDestroy: document.createElement("button"),
    parentBox: document.createElement("div"),
};
const baseBoxSize = 30;
const addBaseElToDom = () => {
    refs.body.prepend(
        refs.input,
        refs.btnCreate,
        refs.btnDestroy,
        refs.parentBox
    );
    refs.input.type = "number";
    refs.input.min = 0;
    refs.btnCreate.type = "button";
    refs.btnCreate.textContent = "Создать";
    refs.btnDestroy.type = "button";
    refs.btnDestroy.textContent = "Очистить";
};
// генирурует номер цвета
const getRandomColor = () => Math.ceil(Math.random() * 255);
//создает цвет
const genereteRgb = () => {
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};
// генерирует размер бокса
const generateBoxSize = (n) => baseBoxSize + (n - 1) * 10;
// создает разметку бокса
const createBoxMarkup = (n) => {
    const color = genereteRgb();
    const markup = `<div style="background-color: ${color}; width: ${generateBoxSize(
        n
    )}px; height: ${generateBoxSize(n)}px" >${n}</div>`;
    return markup;
};
//добавляет боксы в контейнер
const addBoxesToContainer = (n) => {
    let boxesMarkup = "";
    for (let i = 1; i <= n; i++) {
        boxesMarkup += createBoxMarkup(i);
    }
    refs.parentBox.insertAdjacentHTML("beforeend", boxesMarkup);
};
// обработчик создания боксов
const handleCreateBoxes = () => {
    refs.parentBox.innerHTML = "";
    const boxQuntity = refs.input.value;
    addBoxesToContainer(boxQuntity);
};
// обработчик очистки боксов
const handleBoxDestroy = () => {
    refs.parentBox.innerHTML = "";
    refs.input.value = 0;
};
addBaseElToDom();
refs.btnCreate.addEventListener("click", handleCreateBoxes);
refs.btnDestroy.addEventListener("click", handleBoxDestroy);

