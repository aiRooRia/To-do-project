function allowDrop(event) {
  event.prevententDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.prevententDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};

const render = () => {
  document.getElementsByClassName("container-01")[0].innerHTML = "Hello";
};
render();
