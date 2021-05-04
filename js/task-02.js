document.addEventListener('DOMContentLoaded', function () {
    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

    const ingredientList = document.querySelector('#ingredients');

    function createList1(ingredients) {
        const itemName = ingredients.map(ingredient => {
            let item = document.createElement('li');
            item.textContent = ingredient;
            return item;
        });
        ingredientList.append(...itemName);
    }

    createList1(ingredients);
});