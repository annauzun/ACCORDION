const items = document.querySelectorAll(".item")

console.log(items)

items.forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".answer")
        const line = item.querySelector(".line")
        const po = item.querySelector(".po")

        answer.classList.toggle("hidden")
        line.classList.toggle("hidden")
        po.classList.toggle("hidden")
    })
})





