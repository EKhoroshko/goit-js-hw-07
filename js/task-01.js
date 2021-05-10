
const category = document.querySelectorAll(".item");
console.log(`В списке ${category.length} категории.`);

const categoriyList = [...category].map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
)
    .join("\n");
console.log(categoriyList);




