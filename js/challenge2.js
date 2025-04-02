// When the page is loaded, print the default value of the textarea to the console.  Print JUST the value, no other information.
window.addEventListener("load", (event) => {
    const textarea = document.getElementById("billing");
    console.log(textarea.value);
});

// When the checkbox is checked the information from the billing field is copied into the home address field and the home element is disabled.
// When the checkbox is unchecked the information from the home field is cleared and is enabled again.
const billingCheckbox = document.querySelector('input[name="useBilling"]');
const billingField = document.getElementById("billing");
const homeField = document.getElementById("home");
billingCheckbox.addEventListener("click", function() {
    if (billingCheckbox.checked) {
        homeField.value = billingField.value;
        homeField.disabled = true;
    } else {
        homeField.value = "";
        homeField.disabled = false;
    }
});