class TscHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="assets/img/tsc_logo_padrao.png">
                </a>
                <!-- <p>The<br>Supplement<br>Company</p> -->
            </div>
            <button id="btn-mobile"><i class="fa-solid fa-bars"></i></button>
            <nav id="nav">
                <ul class="menu">
                <li><a href="index.html">Página Principal</a></li>
                    <li><a href="sobre-nos.html">Sobre nós</a></li>
                    <li><a href="contato.html">Fale conosco</a></li>
                    <li><a href="marcas.html">Marcas</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    }
}

customElements.define("tsc-header", TscHeader);