let menuState = true;
let bodyState = true;
let getBody = document.querySelector("body");
let getNav = document.querySelector("nav");
let getImg = document.querySelector("img");
let getText = document.querySelector("p");
let getUl = document.querySelector("ul");
let getInput = document.querySelector("input");
let getMenu = document.querySelector(".menu");
let getRed = document.querySelector(".red");
let getOrange = document.querySelector(".orange");
let getPurple = document.querySelector(".purple");
let getGreen = document.querySelector(".green");

let toggleOn = function () {
  if (menuState === true) {
    getUl.style.visibility = "visible";
    getUl.style.opacity = "1";

    menuState = false;
  }
};

let backgroundHome = function () {
  if (menuState === false) {
    getBody.style.backgroundColor = "#d9d9d9";
    getText.innerHTML = "This is a grey background";

    getUl.style.visibility = "hidden";
    getUl.style.opacity = "0";

    menuState = true;
  }
};

let backgroundRed = function () {
  if (menuState === false) {
    getBody.style.backgroundColor = "#ff0000";
    getText.innerHTML = "This is a red background";

    getUl.style.visibility = "hidden";
    getUl.style.opacity = "0";

    menuState = true;
  }
};

let backgroundOrange = function () {
  if (menuState === false) {
    getBody.style.backgroundColor = "#ffa500";
    getText.innerHTML = "This is a orange background";

    getUl.style.visibility = "hidden";
    getUl.style.opacity = "0";

    menuState = true;
  }
};

let backgroundPurple = function () {
  if (menuState === false) {
    getBody.style.backgroundColor = "#800080";
    getText.innerHTML = "This is a purple background";

    getUl.style.visibility = "hidden";
    getUl.style.opacity = "0";

    menuState = true;
  }
};

let backgroundGreen = function () {
  if (menuState === false) {
    getBody.style.backgroundColor = "#008000";
    getText.innerHTML = "This is a green background";

    getUl.style.visibility = "hidden";
    getUl.style.opacity = "0";

    menuState = true;
  }
};
