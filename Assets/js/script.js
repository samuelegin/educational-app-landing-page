const open = document.querySelector("#open");
let nav = document.querySelector("#nav");

open.addEventListener("click", () => {
  nav.style.top = "0";
});

setInterval(closeNav, 5000);

function closeNav() {
    nav.style.top="-5rem"
}
