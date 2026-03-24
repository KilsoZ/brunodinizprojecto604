const headerHTML = `
    <header>
        <div class="logo">
            <a href="/index.html">BrunoFólio</a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="/pages/sobre.html">Sobre</a></li>
                <li><a href="/pages/projetos.html">Projetos</a></li>
                <li><a href="/pages/percurso.html">Percurso</a></li>
                <li><a href="/pages/tecnologias.html">Tecnologias</a></li>
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
    <div class="footer-icons">
        <a href="mailto:brunomiguelr93@gmail.com" class="footer-icon" title="Email">
            <!-- EMAIL ICON -->
            <svg width="22" height="22" fill="var(--cor-de-destaque)" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        </a>

        <a href="https://github.com/KilsoZ" target="_blank" class="footer-icon" title="GitHub">
            <!-- GITHUB ICON -->
            <svg width="22" height="22" fill="var(--cor-de-destaque)" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 
                3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 
                1.1.1 1.7 1.2 1.7 1.2 1 .1.6 2.1 2.9 1.5.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 
                0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 
                1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 
                1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 
                5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.9 
                10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
        </a>

        <a href="https://www.linkedin.com/in/bruno-diniz-1b5134a6/" target="_blank" class="footer-icon" title="LinkedIn">
            <!-- LINKEDIN ICON -->
            <svg width="22" height="22" fill="var(--cor-de-destaque)" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 
                4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 
                8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 
                3.8-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 
                0-3 2-3 4.1V24h-4V8z"/>
            </svg>
        </a>
    </div>

    <p>© 2026 Bruno Diniz</p>
</footer>

`;

document.getElementById('footer-placeholder').innerHTML = footerHTML;