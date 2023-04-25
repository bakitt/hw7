
function add() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
  document.getElementById("result").innerHTML = "Ошибка: введите числа";
  } else {
  var result = num1 + num2;
  document.getElementById("result").innerHTML = result;
  }
  }
  
  function subtract() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
  document.getElementById("result").innerHTML = "Ошибка: введите числа";
  } else {
  var result = num1 - num2;
  document.getElementById("result").innerHTML = result;
  }
  }