// ==========================================
// 1. UNIVERSAL MODAL OPENER (btn + text)
// ==========================================
const backdrop = document.getElementById("modal-backdrop");

document.querySelectorAll("[data-modal]").forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling

    const name = this.getAttribute("data-modal").trim();

    // Close all currently open boxes and modals
    document.querySelectorAll(".box, .modal").forEach((el) => {
      el.classList.remove("active");
    });

    // Open the target element and the backdrop
    const target = document.querySelector(`.${name}`);
    if (target) {
      target.classList.add("active");
      if (backdrop) backdrop.classList.add("active");
    }
  });
});

// ==========================================
// 2. GLOBAL CLOSE FUNCTION
// ==========================================
function closeAllModals() {
  document.querySelectorAll(".box, .modal, .modal-backdrop").forEach((el) => {
    el.classList.remove("active");
  });
}

// Close when clicking the semi-transparent backdrop
if (backdrop) {
  backdrop.addEventListener("click", closeAllModals);
}

// Close logic for clicking within the modal area (optional functionality)
document.querySelectorAll(".box, .modal").forEach((el) => {
  el.addEventListener("click", function (e) {
    // If clicking directly on the modal container or the paragraph inside (as per original logic)
    if (e.target === this || e.target.tagName === "P") {
      closeAllModals();
    }
  });
});

// ==========================================
// 3. KEYBOARD SUPPORT (Escape key to close everything)
// ==========================================
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeAllModals();
  }
});

// ==========================================
// 4. MOBILE HAMBURGER MENU TOGGLE
// ==========================================
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Automatically close mobile menu when a navigation link is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}
// ==========================================
// 5. HORIZONTAL SCROLL ON VERTICAL SCROLL
// ==========================================
// ==========================================
// 5. HORIZONTAL SCROLL ON VERTICAL SCROLL
// ==========================================
// ==========================================
// 5. HORIZONTAL SCROLL ON VERTICAL SCROLL
// ==========================================
// ==========================================
// 5. DIRECT HORIZONTAL WHEEL SCROLL
// ==========================================
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  slider.addEventListener("wheel", (e) => {
    // Only apply on desktop
    if (window.innerWidth > 992) {
      const canScrollLeft = slider.scrollLeft > 0;
      const canScrollRight = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth);
      
      // If we can't scroll further in the requested direction, let the page scroll
      if ((e.deltaY > 0 && !canScrollRight) || (e.deltaY < 0 && !canScrollLeft)) {
        return;
      }

      if (e.deltaY !== 0) {
        // Prevent default vertical page scroll
        e.preventDefault();
        // Scroll horizontal based on vertical wheel delta
        slider.scrollLeft += e.deltaY;
      }
    }
  }, { passive: false });
});
