// Constants
const age = document.getElementById('age');
const gender = document.querySelector('input[type="radio"]');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const bmi = document.getElementById('bmi');
const rules = document.querySelector('.rules');
const improve = document.getElementById('improve');
const bmiPrime = document.getElementById('bmiPrime');
const minBMI = 18.5;
const maxBMI = 25;

// Variables
let heightValue = 165;
let weightValue = 48;
let ageValue = 21;
let genderValue = 'male';
let bmiValue = 17.6;

// User input weight
weight.addEventListener('input', () => {
    weightValue = weight.value;
    calcBMI();
})

// User input height
height.addEventListener('input', () => {
    heightValue = height.value;
    calcBMI();
})

// Calculating BMI and appending results
function calcBMI () {
    let heightInMeter = heightValue/100;
    bmiValue = (weightValue/(heightInMeter * heightInMeter)).toFixed(2);
    
    bmi.innerHTML = `${bmiValue} kg/m<sup>2</sup>`;
    bmiPrime.innerHTML = `BMI Prime: ${(bmiValue/25).toFixed(2)}`;
}

function checkWeight () {
    if(bmiValue < minBMI) {
        return 'Underweight';
    } else if(bmiValue >= minBMI && bmiValue <= maxBMI) {
        return 'Normal';
    } else if(bmiValue > maxBMI && bmiValue <= 30) {
        return 'Overweight';
    } else if(bmiValue > 30) {
        return 'Obese';
    }
}