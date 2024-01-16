let darkMode = localStorage.getItem("darkMode");
console.log(darkMode)





const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
preferredCountries: ["my", "au", "sg", "cn"],
utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");

function process(event) {
event.preventDefault();


}

