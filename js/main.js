const header = document.getElementById('header');
const navToggle = document.querySelector('[data-js="nav-toggle"]');
const navMenu = document.querySelector('[data-js="nav-menu"]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));

    if (isExpanded) {
      header.classList.remove('menu-open');
      navMenu.setAttribute('hidden', true);
    } else {
      header.classList.add('menu-open');
      navMenu.removeAttribute('hidden');
    }
  });
}


// Sticky header scroll effect
function updateHeaderScrolled() {
  if (!header) return;
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateHeaderScrolled, { passive: true });
window.addEventListener('DOMContentLoaded', updateHeaderScrolled);

// Dynamic hero label rotation
const heroInput = document.getElementById("hero-input");
const heroLabel = document.getElementById("hero-label");
const heroMic = document.querySelector(".hero-mic");
const heroSubmit = document.querySelector(".hero-submit");
// Check if we're on the Polish page (default index.html) or English page (index-en.html or index2-en.html)
const isPolishPage = !window.location.pathname.includes('index-en.html') && !window.location.pathname.includes('index2-en.html');

const labelMessages = isPolishPage ? [
  "Co Ci dolega?"
] : [
  "Enter your symptoms"
];
let labelIndex = 0;
let labelInterval = null;

function setLabelText(text) {
  if (heroLabel) heroLabel.textContent = text;
}

function showLabel() {
  if (heroLabel) heroLabel.style.display = "";
}

function hideLabel() {
  if (heroLabel) heroLabel.style.display = "none";
}

function startLabelRotation() {
  if (labelInterval) clearInterval(labelInterval);
  labelInterval = setInterval(() => {
    // Only rotate if input is not focused and empty
    if (
      document.activeElement !== heroInput &&
      heroInput &&
      heroInput.value === ""
    ) {
      labelIndex = (labelIndex + 1) % labelMessages.length;
      setLabelText(labelMessages[labelIndex]);
      showLabel();
    }
  }, 3000);
}

function stopLabelRotation() {
  if (labelInterval) clearInterval(labelInterval);
}

if (heroInput && heroLabel) {

// Smooth scroll to #start and focus input when any <a href="#start"> is clicked
document.querySelectorAll('a[href="#start"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const startElem = document.getElementById("start");
    if (startElem) {
      startElem.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        heroInput.focus();
      }, 400); // delay to allow scroll animation
    }
  });
});
  // Start with the first message
  setLabelText(labelMessages[0]);
  labelIndex = 0;
  showLabel();
  startLabelRotation();

  heroInput.addEventListener("focus", stopLabelRotation);
  heroInput.addEventListener("blur", () => {
    if (heroInput.value === "") {
      setLabelText(labelMessages[labelIndex]);
      showLabel();
      startLabelRotation();
    }
  });

  heroInput.addEventListener("input", () => {
    if (heroInput.value !== "") {
      hideLabel(); // Hide label if input has value
      if (heroSubmit) heroSubmit.style.display = "";
      if (heroMic) heroMic.style.display = "none";
    } else {
      setLabelText(labelMessages[labelIndex]);
      showLabel();
      if (heroSubmit) heroSubmit.style.display = "none";
      if (heroMic) heroMic.style.display = "";
    }
  });

  // Initial state: hide submit button if input is empty, show mic if empty
  if (heroSubmit) {
    heroSubmit.style.display = heroInput.value ? "" : "none";
  }
  if (heroMic) {
    heroMic.style.display = heroInput.value ? "none" : "";
  }
}
