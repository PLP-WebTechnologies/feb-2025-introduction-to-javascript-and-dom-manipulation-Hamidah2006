function changeText() {
  const message = document.getElementById("message");
  message.textContent = "The text has been changed!";
}

function toggleStyle() {
  const message = document.getElementById("message");
  message.classList.toggle("highlight");
}

function addElement() {
  const container = document.getElementById("container");
  const newElement = document.createElement("p");
  newElement.textContent = "A new paragraph was added!";
  newElement.id = "dynamicPara";
  container.appendChild(newElement);
}

function removeElement() {
  const element = document.getElementById("dynamicPara");
  if (element) {
    element.remove();
  }
}
