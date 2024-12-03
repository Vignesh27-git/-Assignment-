const slider = document.querySelector('.slider');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
  const dropdownImage = document.querySelector(".dropdown-image");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown visibility on image click
  dropdownImage.addEventListener("click", function () {
      dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
      if (!dropdownImage.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.style.display = "none";
      }
  });
});



