var btn1 = document.querySelector("#copy1")
var dev1 = document.querySelector("#copied1")
btn1.onclick = function () {
    dev1.style.display = "block"
} 

var btn2 = document.querySelector("#copy2")
var dev2 = document.querySelector("#copied2")
btn2.onclick = function () {
    dev2.style.display = "block"
} 

var btn3 = document.querySelector("#copy3")
var dev3 = document.querySelector("#copied3")
btn3.onclick = function () {
    dev3.style.display = "block"
} 

var close1 = document.querySelector("#close")
close1.onclick = function () {
    dev1.style.display = "none"
    dev2.style.display = "none"
    dev3.style.display = "none"
} 

var X = document.querySelector("#X")
X.onclick = function () {
    dev1.style.display = "none"
    dev2.style.display = "none"
    dev3.style.display = "none"
}
