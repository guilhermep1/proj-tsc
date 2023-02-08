class TscHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta charset="UTF-8">
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"
            integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/b9d0798408.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="assets/css/reset.css">
        <link href='https://css.gg/menu.css' rel='stylesheet'>
        <link rel="stylesheet" href="assets/css/style.css" async>
        <link rel="stylesheet" href="assets/css/responsive.css">
        <script type="module" src="assets/js/dom.js"></script>
        <script src="assets/js/script.js" defer></script>
        `;
    }
}

class TscHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="assets/img/logosite.png" alt="Logotipo The Supplement Company">
                </a>
                <p>The<br>Supplement<br>Company</p>
            </div>
            <button id="btn-mobile"><i class="gg-menu"></i></button>
            <nav id="nav">
                <ul class="menu">
                    <li><a href="sobre-nos.html">Sobre nós</a></li>
                    <li><a href="#">Fale conosco</a></li>
                    <li><a href="#">Marcas</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    }
}

customElements.define("tsc-head", TscHead);
customElements.define("tsc-header", TscHeader);