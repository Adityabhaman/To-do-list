const inputbox = document.getElementById("input"); // isme id k sath # lagane ki jarurat nhi
const msg = document.getElementById("list-container"); // isme id k sath # lagane ki jarurat nhi

function addTask() {
  if (inputbox.value === "") {
    alert("Enter Your Task");
  } else {
    let li = document.createElement("li"); // apne app element create kr ra h
    li.innerHTML = inputbox.value;
    msg.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}
msg.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    } else {
      console.log("erroer");
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", msg.innerHTML);
}
function showlist(){
    msg.innerHTML = localStorage.getItem("data");
}

showlist();