// script.js
// Mostrar y ocultar categorías

document.addEventListener('DOMContentLoaded', function () {

    const titulos = document.querySelectorAll('.categoria-titulo');

    titulos.forEach(titulo => {

        // Cursor tipo mano
        titulo.style.cursor = 'pointer';

        titulo.addEventListener('click', function () {

            // Panel de productos
            const panel = this.parentElement.nextElementSibling;

            // Mostrar u ocultar
            panel.classList.toggle('d-none');

            // Cambiar símbolo
            if (panel.classList.contains('d-none')) {

                this.innerHTML = this.innerHTML.replace('▾', '▸');

            } else {

                this.innerHTML = this.innerHTML.replace('▸', '▾');
            }

        });

    });

});