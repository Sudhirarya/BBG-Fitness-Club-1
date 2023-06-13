// nav js
const lists = document.querySelectorAll(".lists");
function action() {
  lists.forEach((ele) => ele.classList.remove("active"));
  this.classList.add("active");
}
lists.forEach((ele) => {
  ele.addEventListener("mouseover", action);
});

//login button
const showform = document.querySelector("#login-button");
const loginbtn = document.querySelector("#login");

//auto show
setTimeout(showloginform, 50000);
function showloginform() {
  const popupform = document.querySelector(".popup-form");
  const overlay = document.querySelector("#overlay");
  popupform.classList.add("active");
  overlay.classList.add("active");
}
//for laptop
showform.addEventListener("click", () => {
  const popupform = document.querySelector(".popup-form");
  const overlay = document.querySelector("#overlay");
  popupform.classList.add("active");
  overlay.classList.add("active");
});

//for mobile
loginbtn.addEventListener("click", () => {
  const popupform = document.querySelector(".popup-form");
  const overlay = document.querySelector("#overlay");
  popupform.classList.add("active");
  overlay.classList.add("active");
});
// form
const closebtn = document.querySelector(".close-btn");
closebtn.addEventListener("click", () => {
  const popupform = document.querySelector(".popup-form");
  const overlay = document.querySelector("#overlay");
  popupform.classList.remove("active");
  overlay.classList.remove("active");
});

const form = document.querySelector(".form");
const ip1 = document.querySelector("#email");
const ip2 = document.querySelector("#Password");
const note = document.querySelector(".note");

form.addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();
  if (ip1.value == "" || ip2.value == "") {
    note.classList.add("error");
    note.innerHTML = "Please fill all the fields!";
    setTimeout(removenote, 2000);
    function removenote() {
      note.innerHTML = "";
      note.classList.remove("error");
    }
    ip1.value = "";
    ip2.value = "";
  } else {
    alert("Your form has suucessfully submitted!");
    ip1.value = "";
    ip2.value = "";
    ip3.value = "";
  }
}

// Hamburger js

const menubtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown-menu");
menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("open");
  dropdown.classList.toggle("open-menu");
});

// SLIDER

let counter = 1;
setInterval(() => {
  document.getElementById("slider" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 8000);

// REVIEW SECTION

const commentbox = document.querySelectorAll(".comment-box");
console.log(commentbox);
commentbox.forEach((ele) => {
  const dropdown = ele.querySelector(".dropdown");
  const comment = ele.querySelector(".comment");

  ele.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown-active");
    comment.classList.toggle("comment-active");
  });
});
