class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <p class="footer__copyright">
                    &copy 2021 Sergei Papikian
                </p>
            </footer>
        `
    }
}

customElements.define('i_ser_i-footer', MyFooter)

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <ul class="nav">
                        <li class="nav__item"><a class="nav__link " href="index.html">Start</a></li>
                        <li class="nav__item"><a class="nav__link " href="profile.html">Profile</a></li>
                        <li class="nav__item"><a class="nav__link " href="skills.html">Skills</a></li>
                        <li class="nav__item"><a class="nav__link " href="education.html">Education</a></li>
                        <li class="nav__item"><a class="nav__link " href="contact.html">Contact</a></li>
                        <li class="nav__item"><a class="nav__link " href="backgammon.html">Вызов великому</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define('i_ser_i-header', MyHeader)