const selection = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const rate = document.getElementById("rate-field");
const submit = document.getElementById("submit-field");
for (let i = 0; i < selection.length; i++) {
  const element = selection[i];
  element.addEventListener("click", () => {
    result.textContent = i + 1;
  });
}
submitBtn.addEventListener("click", () => {
  rate.classList.add("hidden");
  submit.classList.remove("hidden");
});
