
const form = document.querySelector('.login-form');

if (form) {
    form.addEventListener('mousemove', (e) => {
        const rect = form.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        form.style.setProperty('--x', `${x}px`);
        form.style.setProperty('--y', `${y}px`);
    });
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const btn = document.querySelector('.menu-btn');
    
    if (sidebar && overlay && btn) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        btn.classList.toggle('active-btn');
    }
}

const header = document.querySelector(".main-header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});