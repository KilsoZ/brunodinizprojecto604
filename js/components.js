const headerHTML = `
    <header>
        <div class="logo">
            <a href="/index.html">BrunoFólio</a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="/pages/sobre.html">Sobre</a></li>
                <li><a href="/pages/repositorio.html">Projetos</a></li>
                <li><a href="/pages/percurso.html">Percurso</a></li>
                <li><a href="/pages/tecnologias.html">Tecnologias</a></li>
                <li><a href="/pages/contactos.html">Contato</a></li>
            </ul>
        </nav>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="dark-mode-toggle">
            <input type="checkbox" id="darkmode-toggle">
            <label for="darkmode-toggle"></label>
        </div>
    </header>
`;

document.getElementById('header-placeholder').innerHTML = headerHTML;


const footerHTML = `
    <footer>
        <a href="mailto:brunomiguelr93@gmail.com">brunomiguelr93@gmail.com</a>
        <a href="tel:+351938407133">+351 938 407 133</a>
        <p>© 2026 Bruno Miguel Roque Diniz</p>
    </footer>
`;

document.getElementById('footer-placeholder').innerHTML = footerHTML;