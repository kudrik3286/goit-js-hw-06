const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const itemsRef = ingredients.map((value) => {
  const itemListRef = document.createElement("li");
  itemListRef.textContent = value;
  itemListRef.classList.add("item");
  return itemListRef;
});

listRef.append(...itemsRef);
