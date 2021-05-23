
/*const category = document.querySelectorAll(".item");
console.log(`В списке ${category.length} категории.`);

const categoriyList = [...category].map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
)
    .join("\n");
console.log(categoriyList);*/


const selectId = document.querySelectorAll("h2");
console.log(`В списке ${selectId.length} категории`);

selectId.forEach((even) => {
    console.log("Категория:", even.textContent);
    console.log("Количество элементов:", even.nextElementSibling.children.length);
});
