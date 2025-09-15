// Toggle Menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle?.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formResponse").textContent = "All fields are required!";
    document.getElementById("formResponse").style.color = "red";
  } else {
    document.getElementById("formResponse").textContent = "Message sent successfully!";
    document.getElementById("formResponse").style.color = "green";
  }
});
