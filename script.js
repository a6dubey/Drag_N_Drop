// Get the square and target elements
var square = document.getElementById("square");
var target = document.getElementById("target");

// Set the initial position of the square
var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

// Add event listeners to the square element
square.addEventListener("mousedown", dragMouseDown);
square.addEventListener("mousemove", mouseMove);

// Define the event handlers
function dragMouseDown(e) {
  e.preventDefault();
  // Get the mouse cursor position at startup
  pos3 = e.clientX;
  pos4 = e.clientY;
  // Add event listeners to the document
  document.addEventListener("mouseup", closeDragElement);
  document.addEventListener("mousemove", elementDrag);
}

function elementDrag(e) {
  e.preventDefault();
  // Calculate the new cursor position
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // Set the element's new position
  square.style.top = square.offsetTop - pos2 + "px";
  square.style.left = square.offsetLeft - pos1 + "px";
  // Check if the square is dropped over the target element
  if (isOverlapping(square, target)) {
    target.classList.add("highlight");
  } else {
    target.classList.remove("highlight");
  }
}

function closeDragElement() {
  // Remove event listeners from the document
  document.removeEventListener("mouseup", closeDragElement);
  document.removeEventListener("mousemove", elementDrag);
  // Check if the square is dropped over the target element
  if (isOverlapping(square, target)) {
    target.classList.remove("highlight");
    // Display a message div for 2 seconds
    showMessage(
      "Square dropped over the target element!",
      square.offsetTop + 100,
      square.offsetLeft + 55,
      "#C6F6A6"
    );
  } else {
    showMessage(
      "Square dropped out of the target element!",
      square.offsetTop + 100,
      square.offsetLeft + 55,
      "#F7C2C2"
    );
  }
}

function mouseMove(e) {
  e.preventDefault();
  // Check if the square is hovering over the target element
  target.classList.toggle("hover", isOverlapping(square, target));
}

function isOverlapping(element1, element2) {
  // Get the bounding rectangle of each element
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();
  // Check if the rectangles overlap
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function showMessage(text, top, left, color) {
  // Create a new div element to display the message
  var messageDiv = document.createElement("div");
  messageDiv.innerHTML = text;
  messageDiv.style.position = "absolute";
  messageDiv.style.top = top + "px";
  messageDiv.style.left = left + "px";
  messageDiv.style.padding = "10px";
  messageDiv.style.backgroundColor = color;
  messageDiv.style.border = "1px solid black";
  messageDiv.style.zIndex = 2;
  // Append the message div to the document
  document.body.appendChild(messageDiv);
  // Remove the message div after 3 seconds
  setTimeout(function () {
    document.body.removeChild(messageDiv);
  }, 2000);
}

square.addEventListener("touchstart", dragStart);
square.addEventListener("touchmove", dragMove);
document.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  if (e.type === "touchstart") {
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
  } else {
    pos3 = e.clientX;
    pos4 = e.clientY;
  }
}

function dragMove(e) {
  e.preventDefault();
  if (e.type === "touchmove") {
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
  } else {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
  }
  square.style.top = square.offsetTop - pos2 + "px";
  square.style.left = square.offsetLeft - pos1 + "px";
  target.classList.toggle("hover", isOverlapping(square, target));
}

function dragEnd() {
  target.classList.remove("highlight");
  target.classList.remove("hover");
  if (isOverlapping(square, target)) {
    target.classList.add("highlight");
    showMessage(
      "Square dropped over the target element!",
      square.offsetTop + 100,
      square.offsetLeft + 55,
      "#C6F6A6"
    );
  } else {
    showMessage(
      "Square dropped out of the target element!",
      square.offsetTop + 100,
      square.offsetLeft + 55,
      "#F7C2C2"
    );
  }
}

function isOverlapping(elem1, elem2) {
  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function showMessage(text, top, left, color) {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = text;
  messageDiv.style.cssText = `position:absolute;top:${top}px;left:${left}px;padding:10px;background-color:${color};border:1px solid black;z-index:2;`;
  document.body.appendChild(messageDiv);
  setTimeout(() => document.body.removeChild(messageDiv), 2000);
}
