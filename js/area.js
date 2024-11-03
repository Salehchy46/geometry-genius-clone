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

  addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea () {
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  if (isNaN(length) || isNaN(width)){
    alert ('Please input a number')
    return;
  }

  const area = length * width;

  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area; 

  addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  const area = base * height;
  
  setElmentInnerText('parallelogram-area', area);
  addToCalculationEntry('Parallelogram', area);
}

function getInputValue (fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function setElmentInnerText (elementId , area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function calculateEllipseArea() {
  const majorRadius = getInputValue('ellipse-major-radius');
  const minorRadius = getInputValue('ellipse-minor-radius')
  const area = 3.14 * majorRadius * minorRadius;
  const areaToTwoDecimal = area.toFixed(2);
  setElmentInnerText('ellipse-area', areaToTwoDecimal);

  addToCalculationEntry('Ellipse', areaToTwoDecimal);
}

function addToCalculationEntry(areaType, area){
  const calculationEntry = document.getElementById('calculation-entry');

  const count = calculationEntry.childElementCount;

  const p = document.createElement('p');
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = btn btn-sm btn-success>convert</button>`;

  calculationEntry.appendChild(p);
}