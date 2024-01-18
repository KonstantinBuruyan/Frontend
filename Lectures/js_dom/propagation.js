const direction = false;
// globalThis.addEventListener("click", ()=> console.log("WINDOW"), direction);
// document.addEventListener("click",()=> console.log("DOCUMENT"),direction);

// document.querySelector(".box1").addEventListener(
//     "click",(e)=>{
//         console.log("BOX1");
//         e.stopPropagation();
//     }, {once:direction}
// );

// document.querySelector(".box2").addEventListener(
//     "click",()=>console.log("BOX2"),direction
// );


// document.querySelector(".btn").addEventListener(
//     "click",(e)=>console.log(e.target.innerText),direction
// );

// document.querySelector(".btn2").addEventListener(
//     "click",(e)=>{
//         e.preventDefault();
//         console.log(e.target.innerText = "clicked");

//     },direction
// );

const cars = document.querySelector("#cars");
cars.addEventListener("click", function(e){
    console.log(e.target.getAttribute("id") + " is clicked");
    const target = e.target;
   if( target.matches("li")){
        target.style.backgroundColor="grey";
    }

});

const nissan = document.createElement("li");
nissan.innerText = "Nissan";
nissan.setAttribute("id", "nissan");
cars.appendChild(nissan);


