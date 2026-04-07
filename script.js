
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

function initializeGamesSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchResultsMessage = document.getElementById('searchResultsMessage');
    const gameCards = document.querySelectorAll('.game-card');
    const gamesGrid = document.querySelector('.games-grid') || document.querySelector('.game-grid');

    if (!searchInput || !gameCards.length || !gamesGrid) return;

    if (!searchResultsMessage) {
        searchResultsMessage = document.createElement('div');
        searchResultsMessage.id = 'searchResultsMessage';
        searchResultsMessage.className = 'search-results-message';
        gamesGrid.parentNode.insertBefore(searchResultsMessage, gamesGrid);
    }

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        gameCards.forEach(card => {
            const gameName = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const gameGenre = card.querySelector('.game-genre')?.textContent.toLowerCase() || '';
            const gameDescription = card.querySelector('.game-description')?.textContent.toLowerCase() || '';

            const matches = gameName.includes(searchTerm) ||
                          gameGenre.includes(searchTerm) ||
                          gameDescription.includes(searchTerm);

            if (matches || searchTerm === '') {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (!searchResultsMessage) return;
        searchResultsMessage.innerHTML = '';

        if (searchTerm !== '') {
            if (visibleCount === 0) {
                searchResultsMessage.innerHTML = `
                    <p style="text-align: center; color: #AAFF00; font-size: 18px; margin: 20px 0;">
                        Nenhum jogo encontrado para "${searchTerm}"
                    </p>
                `;
            } else {
                searchResultsMessage.innerHTML = `
                    <p style="text-align: center; color: #AAFF00; font-size: 16px; margin: 20px 0;">
                        ${visibleCount} de ${gameCards.length} jogos encontrados para "${searchTerm}"
                    </p>
                `;
            }
        }
    });
}

function initializeGiftcardSearch() {
    const searchInput = document.getElementById('searchInput');
    const resultsMessage = document.getElementById('searchResultsMessage');
    const giftCards = document.querySelectorAll('.giftcard-card');

    if (!searchInput || !giftCards.length) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        giftCards.forEach(card => {
            const title = card.querySelector('.giftcard-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.giftcard-description')?.textContent.toLowerCase() || '';
            const price = card.querySelector('.giftcard-price')?.textContent.toLowerCase() || '';

            const matches = title.includes(searchTerm) || description.includes(searchTerm) || price.includes(searchTerm);

            if (matches || searchTerm === '') {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (!resultsMessage) return;
        resultsMessage.innerHTML = '';

        if (searchTerm !== '') {
            if (visibleCount === 0) {
                resultsMessage.innerHTML = `
                    <p style="text-align: center; color: #AAFF00; font-size: 18px; margin: 20px 0;">
                        Nenhum gift card encontrado para "${searchTerm}"
                    </p>
                `;
            } else {
                resultsMessage.innerHTML = `
                    <p style="text-align: center; color: #AAFF00; font-size: 16px; margin: 20px 0;">
                        ${visibleCount} de ${giftCards.length} gift cards encontrados para "${searchTerm}"
                    </p>
                `;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeGamesSearch);
document.addEventListener('DOMContentLoaded', initializeGiftcardSearch);
