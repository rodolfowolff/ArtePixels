const sizePicker = document.querySelector('#size-picker');
const pixelCanvas = document.querySelector('#pixel-canvas');

function createGrid() {
  const inputLines = document.querySelector('.input-lines').value;
  const inputColumns = document.querySelector('.input-columns').value;

  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }

  for (let index = 0; index < inputLines; index += 1) {
    let createLines = document.createElement('tr');
    pixelCanvas.appendChild(createLines);

    for (let j = 0; j < inputColumns; j += 1) {
      let createColumns = document.createElement('td');
      createLines.appendChild(createColumns);
    }
  }
}
createGrid()

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
  createGrid();
});