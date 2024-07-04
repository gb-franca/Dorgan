// Seleciona o ícone do menu e a lista de links do menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    // Toggle para alternar a classe 'open' na lista de links do menu
    navLinks.classList.toggle('open');
});

// Adiciona um evento de clique em cada link do menu para fechar o menu ao ser clicado (opcional)
const navItems = document.querySelectorAll('.nav-links li');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

