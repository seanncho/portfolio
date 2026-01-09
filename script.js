// Open the menu when the hamburger icon is clicked
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close the menu when a link is clicked
document.addEventListener("click", function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const target = event.target;

  if (!menu.contains(target) && !icon.contains(target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Fade in and out elements on scroll
const elementsToFadeInUpOnScroll = document.querySelectorAll(".tag");

function handleScroll() {
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
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check to fade in elements if they are already in the viewport without scrolling
handleScroll();

// LOCK ORIENTATION TO PORTRAIT MODE
window.addEventListener('orientationchange', handleOrientationChange);
 
function handleOrientationChange() {
  const orientation = window.orientation; // Returns 0, 90, -90, or 180 (device-dependent)
  const isLandscape = (orientation === 90 || orientation === -90);
 
  if (isLandscape) {
    console.log("Device is in landscape.");
    // Add logic here (e.g., show overlay, lock orientation if possible)
  } else {
    console.log("Device is in portrait.");
    // Hide overlay, unlock orientation, etc.
  }
}
 
// Trigger initial check on page load
handleOrientationChange();

async function lockPortrait() {
  try {
    // Check if the API is supported
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock('portrait'); // Locks to all portrait modes (primary/secondary)
      console.log("Orientation locked to portrait.");
    }
  } catch (error) {
    console.error("Failed to lock orientation:", error);
    // Fallback: Show overlay (from Section 3.2)
  }
}
 
// Call lockPortrait() on user interaction (e.g., button click, page load)
// Note: Some browsers require user interaction to lock orientation (security restriction)