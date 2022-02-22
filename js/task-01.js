const amountItems = document.querySelectorAll(".item").length;
console.log("Number of categories:", amountItems);

const findItem = document.querySelectorAll(".item");

findItem.forEach((item) => {
  const categoryText = item.querySelector("h2").textContent;
  console.log("Category:", categoryText);

  const amountRef = item.querySelectorAll("li").length;
  console.log("Elements:", amountRef);
});
