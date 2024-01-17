const chkbox = document.querySelector("input[name=checkbox]")
const subContainer1 = document.querySelector(".sub-container1")
const catImage = document.getElementById("cat-image")
const memoji = document.getElementById("memoji")
const github = document.querySelector(".fa-github")
const inputs = document.querySelectorAll("input")
const textarea = document.querySelector("textarea")

chkbox.addEventListener("change", () => {


    // Dark mode is on
    if (chkbox.checked) {
        
        document.body.classList.toggle("dark")

        catImage.src = "./images/cat-image-dark.jpg"
        subContainer1.appendChild(catImage)

        memoji.src = "./images/me.png"

        github.classList.add("dark")
        inputs.forEach(input => {
            input.classList.add("dark");
          });
        textarea.classList.add("dark")
        subContainer1.classList.add("dark")


    // Dark mode is off
    } else {
        // Replaces cat image
        document.body.classList.toggle("dark")

        catImage.src = "./images/Cat_image.jpg"
        subContainer1.appendChild(catImage)

        memoji.src = "./images/winking_memoji.png"

        github.classList.remove("dark") 
        inputs.forEach(input => {
            input.classList.remove("dark");
          });
        textarea.classList.remove("dark")
        subContainer1.classList.remove("dark")
    }

})

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

