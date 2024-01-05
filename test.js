function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};
const displayReturn = () => {
  let modalContainer = document.getElementsByClassName("modalContainer")[0];
  window.onclick = function close(event) {
    if (event.target == modalContainer) {
      modalContainer.classList.remove("show");
    }
  };
};
displayReturn();
const boxArray = [];

const render = () => {
  const reciveTodo = document.getElementsByClassName("reciveTodo")[0];
  reciveTodo.innerHTML = "";
  const reciveInprogress =
    document.getElementsByClassName("reciveInprogress")[0];
  reciveInprogress.innerHTML = "";
  const reciveStuck = document.getElementsByClassName("reciveStuck")[0];
  reciveStuck.innerHTML = "";
  const reciveDone = document.getElementsByClassName("reciveDone")[0];
  reciveDone.innerHTML = "";

  boxArray.forEach((el, i) => {
    let boxString = `
<div id="box${i}" class="flex justify-between w-100-percent bg-white bg-cover padding-10 border-raduis-10" draggable="true" ondragstart="drag(event)">
<div>
<img onclick="moveToDone(event)" id="switchToDone${i}" src="./check-circle-svgrepo-com.svg" width="20px" alt="" />
</div>
<div class="flex w-100-percent column gap-30 align-start">
<h3>${el.Title}</h3>
<p>${el.Description}</p>
<button class="button-option">Hight</button>
</div>
<div class="flex column gap-10">
<img src="./cancel1-svgrepo-com.svg" width="20px" alt="" />
<img src="./edit-3-svgrepo-com.svg" width="20px" alt="" />
</div>
</div>`;
    if (el.Status == "todo") {
      reciveTodo.innerHTML += boxString;
    } else if (el.Status == "inprogress") {
      reciveInprogress.innerHTML += boxString;
    } else if (el.Status == "stuck") {
      reciveStuck.innerHTML += boxString;
    } else if (el.Status == "done") {
      reciveDone.innerHTML += boxString;
    }
  });
};

const moveToDone = (ev) => {
  const click = ev.currentTarget;
  const select = click.parentElement.parentElement;
  const list = document.getElementsByClassName("reciveDone")[0];
  list.appendChild(select);
};
function addToDo() {
  const titleInputValue = document.getElementById("description").value;
  const describtionInputValue = document.getElementById("inprogress").value;
  const statusInputValue = document.getElementById("status").value;
  const priopityInputValue = document.getElementById("priopity").value;
  const inputObj = {
    Title: titleInputValue,
    Description: describtionInputValue,
    Status: statusInputValue,
    Priopity: priopityInputValue,
  };
  boxArray.push(inputObj);
  render();
  show();
}
render();
