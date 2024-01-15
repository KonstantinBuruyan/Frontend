// const title = document.getElementById("main-heading");
// console.log(title);
// console.log(typeof title);

// const listItems = document.getElementsByClassName("list-item");
// console.log(listItems);
// console.log(typeof listItems);

// const lItems = document.getElementsByTagName("li");
// console.log(lItems);
// console.log(typeof lItems);

const title = document.querySelector("#main-heading");
console.log(title);

const listItem = document.querySelector(".list-item");
console.log(listItem);



title.style.color= "red";
title.style.backgroundColor= "black";

const ul = document.querySelector("ul");
const li =  document.createElement("li");

ul.append(li);

const firstLi = document.querySelector(".list-item");

console.log(firstLi.innerText);
//console.log(firstLi.textContent);
console.log(firstLi.innerHTML);

li.innerText = "Mexican food";
// li.setAttribute("class", "list-item");
// console.log(title.getAttribute("id"));
// title.removeAttribute("id");

li.classList.add("list-item");
li.classList.add("new_class");

console.log(li.classList.contains("new_class")); 
li.classList.remove("new_class");
console.log(li.classList); 

//title.remove();

// const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

// for (let i of listItems)
// {
//     i.style.color ="red";
//     i.style.fontSize="2 rem";
// }

// console.log(ul.parentNode);
// console.log(ul.parentElement);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// const fn = () =>{
//     console.log("Hello");
// }

const btn = document.querySelector(".btn-1");
// btn1.addEventListener("click",fn);

const container = document.querySelectorAll(".container");

const food = document.querySelector("#food");



for (let cnt of container) {
    cnt.addEventListener("mouseover", ()=> cnt.style.backgroundColor ="red");
    cnt.addEventListener("mouseout", ()=> cnt.style.backgroundColor ="dodgerblue");
}

function hideReveal(){
    if(food.classList.contains("hidden")){
        food.classList.remove("hidden");
    }
    else
    {
        food.classList.add("hidden");
    }
}

btn.addEventListener("click", hideReveal);

const btn2 = document.querySelector(".btn-2");
const nameInput = document.querySelector("#name");

btn2.addEventListener("click", ()=> console.log(`Hello ${nameInput.value}`));