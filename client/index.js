var socket = io();

var form = document.getElementById("form");
var input = document.getElementById("input");
var message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // validate input on the client side
  if (
    !input.value ||
    isNaN(input.value) ||
    !Number.isInteger(Number(input.value))
  ) {
    message.innerHTML = "Please provide a valid integer.";
    message.style.color = "";
    input.value = "";
  } else {
    socket.emit("check_even", parseInt(input.value));
    input.value = "";
  }
});

// capture even_number event and information
socket.on("even_number", function (obj) {
  if (obj.isEven) {
    message.innerHTML = obj.value + " is an even number.";
    message.style.color = "green";
  } else {
    message.innerHTML = obj.value + " is not an even number.";
    message.style.color = "red";
  }
});
