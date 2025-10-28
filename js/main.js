const myHeading = document.getElementById('myHeading')
myHeading.innerText = "test"
const firstLink = document.querySelector("nav ul li a")
firstLink.setAttribute("href", "http://www.google.co.uk/")
const colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)

for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "green";
}

document.getElementById("myTestBtn").addEventListener("click", ()=>{console.info("i was clicked")})

document.querySelector(".red").addEventListener('click', function(ev){document.body.setAttribute('class', 'redBack')});
document.querySelector(".green").addEventListener('click', function(ev){document.body.setAttribute('class', 'greenBack')});
document.querySelector(".blue").addEventListener('click', function(ev){document.body.setAttribute('class', 'blueBack')});
document.querySelector(".reset").addEventListener('click', function(ev){document.body.removeAttribute('class')});