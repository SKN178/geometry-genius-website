function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}
function calculateRectangleArea(){
    const WidthField = document.getElementById('rectangle-width');
    const widthValueText = WidthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input 
    if(isNaN(width) || isNaN(length)){
        alert('please input valid number');
        return;
    }

    const area = width * length;
    console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}

// reuseable function---> reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    console.log(base); 
    const height = getInputValue('Parallelogram-height');
    console.log(height);

    const area = base * height;
    setElementInnerText('Parallelogram-area', area);
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set ,span, p, div etc text
function setElementInnerText(elementId,area){
const element = getElementById(elementId);
element.innerText = area;
}

// data validation 
/* 
1.set the proper type of input field (number, date, .......)
2.check typeOf
3. isNaN
4.
*/