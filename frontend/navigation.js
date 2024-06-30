document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do przejścia do odpowiedniej strony
    function navigateTo(page) {
        window.location.href = page;
    }

    // Obsługa kliknięć na elementy w navbarze
    document.querySelectorAll('.navbar .nav-link').forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const page = navLink.getAttribute('href');
            navigateTo(page);
        });
    });

    // Obsługa kliknięć na elementy w footerze
    document.querySelectorAll('footer .nav-link').forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const page = navLink.getAttribute('href');
            navigateTo(page);
        });
    });
});