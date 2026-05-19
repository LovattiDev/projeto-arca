window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("home-content");

  content.style.display = "block";

  // pequeno delay opcional pra suavizar
  setTimeout(() => {
    loader.classList.add("hide");
    content.classList.add("show");
  }, 100);

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});