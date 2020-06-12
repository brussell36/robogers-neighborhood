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
    numberArray.push(i);
  }
  return result = numberArray;
}