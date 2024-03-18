document.getElementById('calculateButton').addEventListener('click', function() {
    var weight = document.getElementById('weightInput').value;
    if (weight !== '') {
      var bonus = calculateBonus(weight);
      document.getElementById('resultDisplay').textContent = "" + bonus + " B";
    } else {
      alert('Please enter the weight of the item.');
    }
  });
  
  function calculateBonus(weight) {
    // Примерная логика для расчета бонуса, замените на свою логику
    if (weight < 500) {
      return 100;
    } else if (weight >= 500 && weight < 1000) {
      return 200;
    } else {
      return 300;
    }
  }
  
  document.getElementById('calculateButton').addEventListener('click', function() {
    var weight = document.getElementById('weightInput').value;
    if (weight !== '') {
      var bonus = calculateBonus(weight);
      document.getElementById('resultDisplay').textContent = "" + bonus + " B";
    } else {
      alert('Please enter the weight of the item.');
    }
  });
  