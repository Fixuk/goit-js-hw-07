const categories = document.getElementById("categories");
const items = categories.children;

console.log("Number of categories:", items.length);

for (const item of items) {
  const title = item.querySelector("h2").textContent.trim();
  const elementsCount = item.querySelector("ul").children.length;
  console.log("Category:", title);
  console.log("Elements:", elementsCount);
}
