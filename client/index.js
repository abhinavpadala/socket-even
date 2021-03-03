import { isInteger } from "./utils/utils.js";
const socket = io();
var form = document.getElementById("form");
var input = document.getElementById("input");
var message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // validate input on the client side
  if (isInteger(input.value)) {
    socket.emit("check_even", parseInt(input.value));
    input.value = "";
  } else {
    message.innerHTML = "Please provide a valid integer.";
    message.style.color = "";
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
