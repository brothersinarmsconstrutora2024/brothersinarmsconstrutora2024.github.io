document.addEventListener("DOMContentLoaded", function () {
    // Adiciona lazy loading às imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    // Adiciona a funcionalidade de scroll suave para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Adiciona placeholder dinâmico no formulário
    const disponibilidadeInput = document.querySelector('#disponibilidade');
    if (disponibilidadeInput) {
        disponibilidadeInput.placeholder = 'Ex: Segundas à tarde, quartas pela manhã';
    }
});

