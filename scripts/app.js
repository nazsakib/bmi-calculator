const btnArea = document.querySelector(".btn-area button");
const resultArea = document.querySelector(".result-area");

btnArea.addEventListener("click", function () {
    resultArea.classList.remove("hidden");
});
