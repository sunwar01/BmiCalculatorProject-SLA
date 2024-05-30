// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const bmiResults = [];

document.getElementById('calculate').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100;


    const jsonData = { id: 1, height: height, weight: weight };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
    };
    
    const requestUrl = "http://45.90.123.12:5003/measurements";



    fetch(requestUrl, options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
    
    
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('result').value = bmi;
    bmiResults.push(parseFloat(bmi));
});

document.getElementById('calculateAverage').addEventListener('click', function() {

    
    var bmiMeasurements;


    const requestUrl = "http://45.90.123.12:5003/measurements";


    fetch(requestUrl) // api for the get request
        .then(response => response.json())
        .then(data => bmiMeasurements = data);
    
    
    
    if (bmiMeasurements.length === 0) {
        alert('No BMI values to calculate the average.');
        return;
    }

    const sum = bmiResults.reduce((a, b) => a + b, 0);
    const average = (sum / bmiMeasurements.length).toFixed(2);
    document.getElementById('average').value = average;
});