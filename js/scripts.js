// UI logic
$(document).ready(function() {
  $("form#robot").submit(function() {
    event.preventDefault();
    const number = $("#number").val();
    const result = roboCount(number);
    $("#result").text(result);
  });
});

// Business Logic
function roboCount(number) {
  let numberArray = [];
  for (let i = 0; i <= number; i++) {
    if (i === 3 || i === 13 || i >= 30) {
      numberArray.push(" Won't you be my neighbor?")
    }
    else if (i === 2 || i >= 20) {
      numberArray.push(" Boop!")
    }
    else if (i === 1 || i >= 10) {
      numberArray.push(" Beep!")
    }
    else {
      numberArray.push(" " + i)
    }
  }
  return numberArray;
}




