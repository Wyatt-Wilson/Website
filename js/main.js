$(document).ready(function () {
    $(".fadeJS1").hide().fadeIn(1500);
    $(".fadeJS2").hide().fadeIn(5000);
});

//gathered from https://stackoverflow.com/questions/20307555/how-to-make-text-appear-on-scroll-in-html
//makes text appear as you scroll
document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // add fade-in class when the element comes into view
          entry.target.classList.add("fade-in");
          // stop observing the element after it has faded in
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // threshold for when to load text | 10% of element is visible to load
  
    let targets = document.querySelectorAll(".text-scroll");
    targets.forEach(target => {
      observer.observe(target);
    });
  });



  //rainbow text on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.rainbow-scroll-text').forEach(element => {
      element.style.color = `rgb(${scrolled % 255}, ${255 - (scrolled % 255)}, ${(scrolled / 2) % 255})`;
    });
  });


//lots of code for implementing a slideshow with text disappearing upon clicking (see "about" webpage)
let currentImageIndex = 0;
let animationStarted = false;

const images = [
    '../img/victoriaPeak.jpg',
    '../img/banff.jpg',
    '../img/sandDunes.jpg',
    '../img/socotra.jpg',
    '../img/chileGlaciers.jpg',
    '../img/bearIsland.jpg',
    '../img/balloonFestival.png',
    '../img/carlsbad.jpg',
    '../img/monaco.png',
    '../img/yukonTrain.jpg',
    '../img/honeycomb.jpg',
    '../img/greenland.jpg',
    '../img/chongqing.jpg',
    '../img/shanghai.png',
    '../img/gardensByTheBay.jpg',
    '../img/waitomoCaves.png',
    '../img/danakilDepression.png',
    '../img/zhangye.jpg',
];

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.querySelector('.img3').style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function explodeText(element) {
  if (!animationStarted) {
    animationStarted = true;
    const text = element.textContent;
    element.innerHTML = '';
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.animation = 'explode 0.5s forwards';
      element.appendChild(span);
    });

    setTimeout(() => {
      element.style.visibility = 'hidden';
    }, 500);
  }
}

document.querySelectorAll('.explode-text').forEach(element => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!animationStarted) {
      explodeText(element);
    }
    changeImage();
  });
});

document.querySelector('.img3').addEventListener('click', () => {
  if (!animationStarted) {
    explodeText(document.querySelector('.explode-text'));
  }
  changeImage();
});