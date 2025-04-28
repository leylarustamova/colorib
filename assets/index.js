const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".item");

buttons.forEach(button => {
  button.addEventListener("click", () => {
   
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
