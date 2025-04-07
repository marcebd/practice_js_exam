// When the page is loaded an alert box should pop up with the Caption from the 2nd figure.
const caption = document.querySelectorAll("figcaption")[1];
window.addEventListener("load", () => {
  alert(caption.innerText);
});

// Shared update and reset logic
const images = document.querySelectorAll(".thumbnail");
const display = document.querySelector("#display");

// Make all thumbnail images focusable for keyboard navigation
images.forEach((image) => {
   image.setAttribute("tabindex", "0");
 });
 

function updateDisplay(image) {
  display.style.backgroundImage = `url(${image.src})`;
  display.style.backgroundSize = "cover";
  display.style.backgroundPosition = "center";
  display.textContent = image.alt;
  image.style.visibility = "hidden";
}

function resetDisplay(image) {
  display.style.backgroundImage = "";
  display.textContent = "Hover over an image below to display the image and the alt text.";
  image.style.visibility = "visible";
}

images.forEach((image) => {
  // Mouse interactions
  image.addEventListener("mouseover", () => updateDisplay(image));
  image.addEventListener("mouseout", () => resetDisplay(image));

  // Keyboard accessibility
  image.addEventListener("focus", () => updateDisplay(image));
  image.addEventListener("blur", () => resetDisplay(image));
});
