// CARD COPY
const card = document.getElementById("card");
const text = document.getElementById("card-text");
const toast = document.getElementById("toast");

if(card){

card.addEventListener("click",()=>{

navigator.clipboard.writeText(text.innerText);

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

});

}


// QUOTES
const quotes = document.querySelectorAll(".quote");
const search = document.getElementById("search");
const random = document.getElementById("random");


if(quotes.length){

quotes.forEach(q=>{

q.addEventListener("click",()=>{

navigator.clipboard.writeText(q.innerText);

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

});

});

}


if(search){

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();

quotes.forEach(q=>{

q.style.display =
q.innerText.toLowerCase().includes(value)

? "block"

: "none";

});

});

}


if(random){

random.addEventListener("click",()=>{

let arr=[...quotes];

let item=arr[Math.floor(Math.random()*arr.length)];

item.scrollIntoView({

behavior:"smooth",

block:"center"

});

item.style.background="rgba(255,255,255,.2)";

setTimeout(()=>{

item.style.background="rgba(255,255,255,.05)";

},1500);

});

}
