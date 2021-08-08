//rename 버튼 만들자
const nameForm = document.querySelector("#nameform");
const nameInput = document.querySelector("#nameinput");
const welcome = document.querySelector("#welcome");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintingWelcome(username) {
  welcome.innerText = `Welcome ${username}`;
  welcome.classList.remove(HIDDEN_CLASSNAME);
}

function name(event) {
  event.preventDefault();
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintingWelcome(username);
  nameForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  nameForm.addEventListener("submit", name);
} else {
  nameForm.classList.add(HIDDEN_CLASSNAME);
  paintingWelcome(savedUsername);
}