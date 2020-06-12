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
    if ([i].includes(3) || i === 13 || i >= 30 && i < 40) {
      numberArray.push(" Won't you be my neighbor?")
    }
    else if ([i].includes(2) || i >= 20 && i < 30) {
      numberArray.push(" Boop!")
    }
    else if ([i].includes(1) || i >= 10 && i < 20) {
      numberArray.push(" Beep!")
    }
    else {
      numberArray.push(" " + i)
    }
  }
  return numberArray;
}




