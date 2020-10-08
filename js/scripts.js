$(document).ready(function() {
  $("#picknumber").submit(function(event) {
    let name = $("#inputName").val();
    let input = $("#inputNumber").val();
    let array = [];
    for (let i = 0; i <= input; i++) {
      let outcome = i.toString();
      if (outcome.includes(3)) {
        array.push(name + ", " + "Won't you be my neighbor?");
      } else if (outcome.includes(2)) {
        array.push("Boop");
      } else if (outcome.includes(1)) {
        array.push("Beep");
      } else {
        array.push(outcome);
      }
    }

  

  $("#output").text(array);
  event.preventDefault();
  });
})