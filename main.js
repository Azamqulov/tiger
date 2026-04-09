// =======================
// 1️⃣ UNIVERSAL OCHISH (btn + text)
// =======================
document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        e.stopPropagation(); // event yuqoriga chiqmasligi uchun

        const name = this.getAttribute('data-modal');

        // hamma box va modalni yopamiz
        document.querySelectorAll('.box, .modal').forEach(el => {
            el.classList.remove('active');
        });

        // kerakli elementni ochamiz
        const target = document.querySelector(`.${name}`);
        if (target) {
            target.classList.add('active');
        }
    });
});

// =======================
// 2️⃣ BOX / MODAL YOPISH (overlay yoki <p> bosilganda)
// =======================
document.querySelectorAll('.box, .modal').forEach(el => {
    el.addEventListener('click', function (e) {
        const isOverlay = e.target === this; // fon bosilganda
        const isParagraph = e.target.tagName === 'P'; // ichidagi text bosilganda

        if (isOverlay || isParagraph) {
            this.classList.remove('active');
        }
    });
});

// =======================
// 3️⃣ ESC BOSILSA HAMMASINI YOPISH
// =======================
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.box, .modal').forEach(el => {
            el.classList.remove('active');
        });
    }
});

// =======================
// 4️⃣ HAMBURGER MENU TOGGLE
// =======================
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}
