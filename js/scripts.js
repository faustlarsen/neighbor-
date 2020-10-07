$(document).ready(function() {
  $("#picknumber").submit(function(event) {
    let input = $("#inputNumber").val();
    
    let array = [];
    for (let i = 0; i <= input; i++) {
      array.push(i);
    }

  $("#output").text(array);
  event.preventDefault();
  });
})