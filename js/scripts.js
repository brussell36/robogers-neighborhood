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
  const numberArray = []
  for (i = 0; i <= number; i++) {
    if (i.includes(3)) {
      numberArray.push(" Won't you be my neighbor?")
    }
    else if (i === 2) {
      numberArray.push(" Boop!")
    }
    else if (i === 1) {
      numberArray.push(" Beep!")
    }
    else {
      numberArray.push(" " + i);}
  }
  return result = numberArray;
}