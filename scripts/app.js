//  submit button area
const btnArea = document.querySelector(".btn-area");

// input area
const weightInput = document.getElementById("inputWeight");
const heightFeet = document.getElementById("inputHeightFeet");
const heightInch = document.getElementById("inputHeightInch");

// result area
const resultArea = document.querySelector(".result-area");

// feet to meter convert
function feetToMeter(feetNum) {
    return feetNum * 0.3054; // 1 feet = 0.3054 Meter
}

// inch to meter convert
function inchToMeter(inchNum) {
    return inchNum * 0.0254; // 1 Inch = 0.0254 Meter
}

btnArea.addEventListener("click", function () {
    const weightNum = parseFloat(weightInput.value);
    const feetNum = parseFloat(heightFeet.value);
    const inchNum = parseFloat(heightInch.value);

    // calculate total height in meter
    const totalHeightInMeter = feetToMeter(feetNum) + inchToMeter(inchNum);

    // calculate BMI score. Formula is - BMI = weight / meter^2
    const bmiScore = weightNum / (totalHeightInMeter * totalHeightInMeter);

    resultArea.textContent = `Your BMI Score is: ${bmiScore.toFixed(2)}`;
});
