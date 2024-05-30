// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const bmiResults = [];

document.getElementById('calculate').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100;

    var data1;

    const requestUrl = "http://localhost:5219/measurements";fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            
            data1 = data
        })
        .then(data => {
            // do something with the data the API has returned
        })
    
    console.log(requestUrl)
    console.log(data1)
        
    
    
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('result').value = bmi;
    bmiResults.push(parseFloat(bmi));
});

document.getElementById('calculateAverage').addEventListener('click', function() {
    if (bmiResults.length === 0) {
        alert('No BMI values to calculate the average.');
        return;
    }

    const sum = bmiResults.reduce((a, b) => a + b, 0);
    const average = (sum / bmiResults.length).toFixed(2);
    document.getElementById('average').value = average;
});