const selection = document.querySelectorAll(".btn");

selection.addEventListener("click", () => {
  console.log("clicked");
});

selection.forEach((select) => {
  console.log(select.textContent);
});
