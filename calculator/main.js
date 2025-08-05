document.querySelector('.result').style.display = 'none';

document.getElementById('calculate-btn').addEventListener('click', function () {
    document.querySelector('.result').style.display = 'block';
});

// Скрываем результат при изменении чисел или операции
document.getElementById('first-number-select').addEventListener('change', function() {
    document.querySelector('.result').style.display = 'none';
});

document.getElementById('second-number-select').addEventListener('change', function() {
    document.querySelector('.result').style.display = 'none';
});

document.getElementById('operation-select').addEventListener('change', function() {
    document.querySelector('.result').style.display = 'none';
});
