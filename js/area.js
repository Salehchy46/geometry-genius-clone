function calculateTriangleArea() {
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;

  const areaSpan = document.getElementById('area-squire');
  areaSpan.innerText = area;
}

function calculateRectangleArea () {
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const area = length * width;

  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area; 
}