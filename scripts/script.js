const buttonShowNav = document.getElementById('show-nav');
const buttonHiddenNav = document.getElementById('hidden-nav');
const headerNav = document.getElementById('header-nav');

// Show the navigation bar
buttonShowNav.addEventListener('click', () => {
    headerNav.style.display = 'flex';
    buttonHiddenNav.style.display = 'flex'
});

// Hide the navigation bar
buttonHiddenNav.addEventListener('click', () => {
    headerNav.style.display = 'none';
});