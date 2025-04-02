// When the page is loaded use my CSS to style the h1 heading to match my example below.
window.addEventListener("load", (event) => {
    const heading = document.querySelector("h1");
    heading.classList.add("heading");
  });

//If the visitor double-clicks anywhere on the page an alert button should pop up with the current time.
document.addEventListener("dblclick", function() {
    const currentTime = new Date();
    alert("Current time: " + currentTime);
  });

//If the visitor clicks on the input for “Check to toggle the email” field, modify the page so that the email field is available when the input is checked and not available when it is unchecked.
const emailCheckbox = document.getElementById("toggle");
const emailField = document.getElementById("emailBox");
emailCheckbox.addEventListener("click", function() {
   emailCheckbox.classList.add("hidden");
    emailField.classList.remove("hidden");
});