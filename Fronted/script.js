// === script.js ===

// ========== Contact Form Submit ==========

const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    fetch("https://rahi-backend-gvud.onrender.com/send",  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseMsg.textContent = data.message || "Thank you! Your message has been sent.";
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        responseMsg.textContent = "Something went wrong!";
      });
  });
}

// ========== Typewriter Effect ==========
const typewriterText = [
  "Full Stack Developer 💻",
  "B.Tech in CSE 🎓",
  "Frontend + Backend Expert 🔥",
  "Love to Build Cool Things 🚀"
];
let typeIndex = 0;
let charIndex = 0;
const typeElement = document.querySelector(".type-text");

function typeLoop() {
  if (!typeElement) return;
  if (charIndex < typewriterText[typeIndex].length) {
    typeElement.textContent += typewriterText[typeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, 100);
  } else {
    setTimeout(() => {
      typeElement.textContent = "";
      charIndex = 0;
      typeIndex = (typeIndex + 1) % typewriterText.length;
      typeLoop();
    }, 2000);
  }
}
window.addEventListener("load", typeLoop);

// ========== Reveal on Scroll ==========
const animatedItems = document.querySelectorAll(".animate");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  animatedItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ========== VANTA Backgrounds ==========
VANTA.NET({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x00c6ff,
  backgroundColor: 0x050505,
  points: 18.0,
  maxDistance: 25.0,
  spacing: 18.0
});

VANTA.NET({
  el: "#about",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  color: 0x00c6ff,
  backgroundColor: 0x0a0a0a,
  spacing: 20.0
});

VANTA.NET({
  el: "#projects",
  mouseControls: true,
  touchControls: true,
  color: 0x00c6ff,
  backgroundColor: 0x10101a,
  spacing: 16
});

VANTA.NET({
  el: "#experience",
  mouseControls: true,
  color: 0x00c6ff,
  backgroundColor: 0x10101a,
  spacing: 16
});

// ========== Light/Dark Mode ==========
function toggleMode() {
  document.body.classList.toggle("light");
}

// ========== Hire Modal ==========

function openHireModal() {
  document.getElementById("hireModal").classList.add("active");
}

function closeHireModal() {
  document.getElementById("hireModal").classList.remove("active");
}

function submitHireForm(event) {
  event.preventDefault();

  const modal = document.getElementById("hireModal");
  const form = modal.querySelector("form");
  const inputs = form.querySelectorAll("input, textarea");

  const formData = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value,
  };

  fetch("https://rahi-backend-gvud.onrender.com/send",  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message || "Message sent successfully!");
      form.reset();
      closeHireModal();
    })
    .catch((err) => {
      alert("Something went wrong!");
      console.error(err);
    });
}
