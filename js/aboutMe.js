document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector(".photo-frame img");
  const imagePaths = [
    "./img/me1.jpg",
    "./img/me2.jpg",
    "./img/me3.jpg",
    "./img/me4.jpg",
  ];

  let index = 0;
  const delay = 500; // milliseconds per image
  const frameContainer = document.querySelector(".photo-frame");
  const textContent = document.querySelector(".about-intro");

  const showNextImage = () => {
    if (index < imagePaths.length) {
      slideshow.src = imagePaths[index];
      slideshow.style.opacity = 0; // Start fade-out for the current image
      setTimeout(() => {
        slideshow.style.opacity = 1; // Fade-in new image
      }, 100); // Delay before the fade-in starts
      index++;
      setTimeout(showNextImage, delay);
    } else {
      // Final image loaded, smoothly shift frame and reveal text
      frameContainer.classList.add("slide-left");
      textContent.classList.add("show-text");
    }
  };

  showNextImage(); // Start the slideshow
});
