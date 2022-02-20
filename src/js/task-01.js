const categoriesTitleRef = document.querySelectorAll("h2");
console.log(`Number of categories: ${categoriesTitleRef.length}`);

const categoriesRef = document.querySelectorAll(".item");

console.log(`Category: ${categoriesTitleRef[0].textContent}`);
console.log(`Elements: ${categoriesRef[0].lastElementChild.children.length}`);

console.log(`Category: ${categoriesTitleRef[1].textContent}`);
console.log(`Elements: ${categoriesRef[1].lastElementChild.children.length}`);

console.log(`Category: ${categoriesTitleRef[2].textContent}`);
console.log(`Elements: ${categoriesRef[2].lastElementChild.children.length}`);
