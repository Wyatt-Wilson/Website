document.addEventListener("DOMContentLoaded", function () {
  const enterLink = document.querySelector(".enter-link");
  const nameEl = document.querySelector(".name");
  const enterContainer = document.querySelector(".enter-link-container");
  const hero = document.querySelector(".hero-image");
  const grid = document.getElementById("gridSection");

  if (enterLink && nameEl && enterContainer && grid) {
    enterLink.addEventListener("click", function (e) {
      e.preventDefault();
    
      nameEl.classList.add("fade-out");
      enterContainer.classList.add("fade-out");
      hero.classList.add("fade-out");
    
      setTimeout(() => {
        hero.style.display = "none";
        grid.style.display = "flex";
        grid.style.opacity = 1;
        document.body.classList.add("entered-site");
      }, 1500);
    });
  }
});