const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");
const tema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

// Abre a sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
});

// Fecha a sidebar
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});