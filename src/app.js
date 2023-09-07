


let btnShow = document.getElementById("btnShow")
btnShow.addEventListener("click", showAnswer)

function showAnswer() {
    document.getElementById("answer").style.display = "flex"
    document.getElementById("btnHide").style.display = "flex"
    document.getElementById("btnShow").style.display = "none"
}

let btnHide = document.getElementById("btnHide")
btnHide.addEventListener("click", hideAnswer)

function hideAnswer() {
    document.getElementById("answer").style.display = "none"
    document.getElementById("btnHide").style.display = "none"
    document.getElementById("btnShow").style.display = "flex"
}
