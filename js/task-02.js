const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ListRef = document.createElement("ul");
ListRef.classList.add("ingredients-list");
console.log(ListRef);
const elementLi = document.createElement("li");
elementLi.textContent = `"Potatoes"`;
elementLi.classList.add("item");

const elementLi1 = document.createElement("li");
elementLi1.textContent = `"Mushrooms"`;
elementLi1.classList.add("item");

const elementLi2 = document.createElement("li");
elementLi2.textContent = `"Garlic"`;
elementLi2.classList.add("item");

const elementLi3 = document.createElement("li");
elementLi3.textContent = `"Tomatos"`;
elementLi3.classList.add("item");

const elementLi4 = document.createElement("li");
elementLi4.textContent = `"Herbs"`;
elementLi4.classList.add("item");

const elementLi5 = document.createElement("li");
elementLi5.textContent = `"Condiments"`;
elementLi5.classList.add("item");

ListRef.append(
  elementLi,
  elementLi1,
  elementLi2,
  elementLi3,
  elementLi4,
  elementLi5
);
document.body.appendChild(ListRef);
