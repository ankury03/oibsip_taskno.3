document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.classList.add('show');
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    }

    resultDiv.textContent = `${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
    resultDiv.classList.add('show');
});
