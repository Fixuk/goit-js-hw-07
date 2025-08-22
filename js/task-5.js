function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

colorSpan.textContent = "-";

btn.addEventListener("click", () => {
  const hex = getRandomHexColor();
  body.style.backgroundColor = hex;
  colorSpan.textContent = hex;
});
