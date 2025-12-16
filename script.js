
const btn = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

if (btn && menu) btn.addEventListener("click", () => menu.classList.toggle("show"));

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a").forEach(a => {
  if (a.getAttribute("href") === path) a.classList.add("active");
});
