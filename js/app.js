document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'es'; // Idioma por defecto

    const translatePage = (lang) => {
        // Buscar todos los elementos que tengan el atributo del idioma seleccionado
        const textElements = document.querySelectorAll('[data-es]');
        
        textElements.forEach(el => {
            if (lang === 'en') {
                if (el.getAttribute('data-en')) {
                    el.innerHTML = el.getAttribute('data-en');
                }
            } else {
                if (el.getAttribute('data-es')) {
                    el.innerHTML = el.getAttribute('data-es');
                }
            }
        });

        // Actualizar el atributo lang del documento HTML
        document.documentElement.lang = lang;
    };

    langToggle.addEventListener('click', () => {
        if (currentLang === 'es') {
            currentLang = 'en';
            langToggle.textContent = 'ES'; // Muestra la opción para volver a Español
        } else {
            currentLang = 'es';
            langToggle.textContent = 'EN'; // Muestra la opción para cambiar a Inglés
        }
        translatePage(currentLang);
    });
});