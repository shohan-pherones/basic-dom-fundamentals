"use strict";

// dom manipulations

/* // 1. selecting elements
// getElementByID() -- fast / rarely
// const title = document.getElementById("main-heading");
// const secondTitle = document.getElementById("second-heading");

// getElementsByClassName()
// const country = document.getElementsByClassName("country");

// getElementsByTagName()
const input = document.getElementsByTagName("input");
// const country = document.getElementsByTagName("li");

// querySelector() -- most of the cases
const title2 = document.querySelector("#main-heading"); // id
const btn = document.querySelector(".btn"); // class
const h2 = document.querySelector("h2"); // tag

// querySelectorAll() -- most of the cases
const country = document.querySelectorAll(".country");
// console.log(country); */

/* // 2. styling elements
const title = document.querySelector("#main-heading");
title.style.color = "crimson"; // inline-styles
title.style.backgroundColor = "black";
title.style.fontSize = "3rem";

const countries = document.querySelectorAll(".country");
for (let i = 0; i < countries.length; i++) {
  countries[i].style.color = "hotpink";
  countries[i].style.fontSize = "2rem";
} */

// 3. creating elements
// const ul = document.querySelector("ul");

// const li = document.createElement("li");
// const li2 = document.createElement("li");
// li.innerText = "India";
// li.textContent = "India";
// li2.textContent = "Japan";

// append
// ul.append(li);
// ul.appendChild(li);
// ul.insertAdjacentElement("afterbegin", li);
// ul.insertAdjacentElement("afterbegin", li2);

// const firstCountry = document.querySelector(".country");
// firstCountry.innerText = "BD";
// console.log(firstCountry.innerText);
// console.log(firstCountry.textContent);
// console.log(ul.innerHTML);

// const myCountry = "Bangladesh";

// const container = document.querySelector(".container");
// container.innerHTML = `
//       <h1 id="main-heading">Countries</h1>
//       <h2 id="second-heading">List</h2>
//       <ul>
//         <li class="country">${myCountry}</li>
//         <li class="country">USA</li>
//         <li class="country">Canada</li>
//         <li class="country">Dubai</li>
//         <li class="country">UK</li>
//       </ul>
//       <input type="text" class="input" />
//       <button class="btn">Add country</button>

// `;

// console.log(container);

/* const h1 = document.querySelector("#main-heading");
// h1.setAttribute("class", "main-headline");
// h1.setAttribute("width", "300px");
// console.log(h1.getAttribute("width"));
// h1.removeAttribute("class");
// h1.removeAttribute("width");

h1.classList.add("main-heading", "first-country");
h1.classList.remove("main-heading");

let a = 0;
if (a) h1.classList.toggle("main-heading");

if (h1.classList.contains("main-heading")) a += 2;
console.log(a);

const h2 = document.getElementById("second-heading");
h2.remove(); // don't do this */

// 4. node traversals
/* const ul = document.querySelector("ul");

console.log(ul.parentElement);
console.log(ul.parentNode);
console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

const h1 = document.querySelector("#main-heading");

console.log(h1.nextSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.previousElementSibling); */

// 5. event handlers
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("country");
  li.textContent = Number(input.value) + 2; // always string
  // ul.append(li);
  ul.insertAdjacentElement("beforeend", li);
  input.value = "";
});
