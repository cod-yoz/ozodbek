let card = document.getElementById("card");
let text = document.getElementById("card-text");
let toast = document.getElementById("toast");

card.addEventListener("click", function() {
  navigator.clipboard.writeText(text.innerText);

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
});