const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Book Now button click
const bookBtn = document.querySelector("#bookBtn");

bookBtn.addEventListener("click", () => {
  alert("Booking page will open soon!");
});