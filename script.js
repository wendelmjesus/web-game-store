const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('mousemove', (e) => {
        const rect = loginForm.getBoundingClientRect();
        
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        loginForm.style.setProperty('--x', `${x}%`);
        loginForm.style.setProperty('--y', `${y}%`);
    });