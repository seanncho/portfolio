function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("click", function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const target = event.target;

  if (!menu.contains(target) && !icon.contains(target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

const elementsToFadeInUpOnScroll = document.querySelectorAll(".tag");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
        element.classList.add("fade-in-up");
        element.classList.remove("fade-out");
      } else {
        element.classList.remove("fade-in-up");
        element.classList.add("fade-out");
      }
    });
  });
}