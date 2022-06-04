let isStarting = true;

const redEl = document.querySelector("#red");
const greenEl = document.querySelector("#green");
const blueEl = document.querySelector("#blue");

const addRedEl = document.querySelector("#addRed");
const addGreenEl = document.querySelector("#addGreen");
const addBlueEl = document.querySelector("#addBlue");

const form = document.querySelector("form")

const colorBox = document.querySelector(".colorBox");

function colorConverter(firstColor, secondColor, thirdColor) {
    const red = Number(String(firstColor)[0]) * 16 + Number(String(firstColor)[0]) * 1
    const green = Number(String(secondColor)[0]) * 16 + Number(String(secondColor)[0]) * 1
    const blue = Number(String(thirdColor)[0]) * 16 + Number(String(thirdColor)[0]) * 1
    return [red, green, blue]
}

let id;
let redRGB;
let greenRGB;
let blueRGB;

function handleSubmit(e) {
e.preventDefault();

if(isStarting){
    [redRGB, greenRGB, blueRGB ] = colorConverter(Number(redEl.value),Number(redEl.value),Number(redEl.value))
   id = setInterval(startInterval, 250);
}else{
    clearInterval(id)
}

isStarting = !isStarting
}

function startInterval() {
    const redIncrement = Number(addRedEl.value)
    const greenIncrement = Number(addGreenEl.value)
    const blueIncrement = Number(addBlueEl.value)

    redRGB += redIncrement;
    greenRGB += greenIncrement;
    blueRGB += blueIncrement;

    colorBox.style.backgroundColor = `rgb(${redRGB}, ${greenRGB}, ${blueRGB})`;

    // console.log(redRGB, greenRGB, blueRGB)

    // const [redRGB, greenRGB, blueRGB] = colorConverter(red, green, blue)
    // const redValue = colorConverter(red, green, blue)[0]

}

form.addEventListener("submit", handleSubmit)