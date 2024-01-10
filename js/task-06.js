function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const newBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  newBoxes.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    newBoxes.appendChild(box);
    size += 10;
  }
}

buttonCreate.addEventListener("click", () => {
  const total = parseInt(inputNumber.value, 10);
  if (total >= 1 && total <= 100) {
    createBoxes(total);
    inputNumber.value = '';
  }
})

buttonDestroy.addEventListener("click", () => {
  newBoxes.innerHTML = '';
})
