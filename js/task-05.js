function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor () {
  const bodyElement = document.body;
  const colorSpan = document.querySelector('.color');

  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
}
document.querySelector('.change-color').addEventListener('click', changeBackgroundColor);
