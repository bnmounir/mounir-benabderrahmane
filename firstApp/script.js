let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplayed = document.querySelector('#message');
let resetBtn = document.querySelector('#resetBtn');
let h1 = document.querySelector('h1');
let modeBtns = document.querySelectorAll('.mode');

init();

function init() {
  setupMode();
  setupSquares();
  reset();
}
function setupMode() {
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function() {
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent == 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplayed.textContent = 'Correct';
        resetBtn.textContent = 'Play Again?';
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplayed.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  resetBtn.textContent = 'New Colors';
  colorDisplay.textContent = pickedColor;
  messageDisplayed.textContent = '';
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
}
resetBtn.addEventListener('click', function() {
  reset();
});

function changeColor(color) {
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
