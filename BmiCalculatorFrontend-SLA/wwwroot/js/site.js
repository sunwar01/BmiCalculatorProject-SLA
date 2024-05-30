// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const bmiResults = [];

document.getElementById('calculate').addEventListener('click', function() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);


    const jsonData = { id: 1, height: height, weight: weight };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
    };
    
    const requestUrl = "http://45.90.123.12:5003/measurements";

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }else {

        
        console.log("posting:" + options.body);
        
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

    }
    

    height = height / 100;

    let bmi = (weight / (height * height));
    
    console.log("height:" + height)
    console.log("weight:" + weight)
    console.log("bmi:" + bmi);
    
    document.getElementById('result').value = bmi.valueOf();
    bmiResults.push(parseFloat(bmi));
});

document.getElementById('calculateAverage').addEventListener('click', async function () {


    let bmiMeasurements;


    const requestUrl = "http://45.90.123.12:5003/measurements";

    async function exampleFetch() {
        const response = await fetch(requestUrl);
        bmiMeasurements = await response.json();
        console.log(bmiMeasurements);
    }

    await exampleFetch()


    

    //bmiMeasurements = JSON.parse(bmiMeasurements);

    let bmiDataResults = [];

    for (let i = 0; i < bmiMeasurements.length; i++) {
        console.log("weight: " + bmiMeasurements[i].weight);
        console.log("height in cm: " + bmiMeasurements[i].height);
        console.log("height in m: " + bmiMeasurements[i].height / 100)
        let bmi = bmiMeasurements[i].weight / ((bmiMeasurements[i].height / 100) * (bmiMeasurements[i].height / 100));
        console.log("bmi: " + bmi);
        bmiDataResults.push(bmi);
    }

    console.log(bmiDataResults);

    console.log("setting average");

    const sum = bmiDataResults.reduce((a, b) => a + b, 0);
    console.log("sum: " + sum);
    const average = (sum / bmiMeasurements.length).toFixed(2);
    console.log("average: " + average);
    document.getElementById('average').value = average;
});