const chkbox = document.querySelector("input[name=checkbox]")
const subContainer1 = document.querySelector(".sub-container1")
const catImageLight = document.querySelector(".cat-image-light")

let newImg = document.createElement("img")


chkbox.addEventListener("change", () => {


    // Dark mode is on
    if (chkbox.checked) {
        
        document.body.classList.toggle("dark")
        
        if (catImageLight) {
            subContainer1.removeChild(catImageLight)
        }

        newImg.src = "./images/cat-image-dark.jpg"
        subContainer1.appendChild(newImg)

        // subContainer1.style.backgroundColor = "white"

    // Dark mode is off
    } else {
        // Replaces cat image
        document.body.classList.toggle("dark")
        subContainer1.removeChild(newImg)

        newImg.src = "./images/Cat_image.jpg"
        newImg.classList.add("cat-image-light")
        subContainer1.appendChild(newImg)

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

