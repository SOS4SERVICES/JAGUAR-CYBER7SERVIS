window.onload = () => {
  
  // PARTICLES
  tsParticles.load("tsparticles", {
    background: { color: "transparent" },
    particles: {
      number: { value: 40 },
      color: { value: "#00d4ff" },
      links: {
        enable: true,
        color: "#00d4ff",
        distance: 120,
        opacity: 0.3
      },
      move: { enable: true, speed: 1 },
      size: { value: 2 },
      opacity: { value: 0.5 }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      }
    }
  });
  
};

// SCROLL
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// BOTÓN
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// CURSOR
const glow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// POPUP AUTOMÁTICO
setTimeout(() => {
  alert("🚀 ¿Quieres más clientes? Escríbenos por WhatsApp");
}, 8000);
