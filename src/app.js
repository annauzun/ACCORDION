const items = document.querySelectorAll(".item");

console.log(items);

items.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".answer");
    const hide = item.querySelector(".hide");
    const show = item.querySelector(".show");

    answer.classList.toggle("hidden");
    hide.classList.toggle("hidden");
    show.classList.toggle("hidden");
  });
});
