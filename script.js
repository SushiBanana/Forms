const miniButton = document.querySelector("button")

function changeColor()
{
    miniButton.style.backgroundColor = "orange"
}

miniButton.addEventListener("click", changeColor)

console.log("yes")