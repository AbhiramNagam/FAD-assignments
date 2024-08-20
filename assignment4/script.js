document.getElementById('generate').addEventListener('click', function() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
        return;
    }

    if (min >= max) {
        document.getElementById('result').textContent = 'Maximum must be greater than minimum';
        return;
    }

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = 'Random number: ' + randomNumber;
});