import "./styles.css";

const stars = document.querySelectorAll(".stars-container a");
const starDiv = document.querySelector(".stars-container");
stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    starDiv.classList.add("disabled");
    stars.forEach((otherStar, j) => {
      if (j <= i) {
        otherStar.classList.add("active");
      } else {
        otherStar.classList.remove("active");
      }
    });
  });
});
