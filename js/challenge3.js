// When the page is loaded an alert box should pop up with the Caption from the 2nd figure.
const caption = document.querySelectorAll("figcaption")[1];
window.addEventListener("load", (event) => {
   alert(caption.innerText);
});

//When the mouse goes over an image three things should happen:
// The background image of the display should change to the same image being hovered over.  
// The text in the display should show the alt attribute of the image
// The image should no longer be visible – but it should still take up the same amount of space.
const images = document.querySelectorAll("img");
const display = document.querySelector("#display");