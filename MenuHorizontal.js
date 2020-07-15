
import GlobalStyles from './GlobalStyles.js';
class MenuHorizontal extends HTMLElement{
    connectedCallback(){
        const menu = document.createElement("menu-custom");
        const style = document.createElement("style");
        style.setAttribute('type', 'text/css');
        style.innerHTML = GlobalStyles;
        const ul = document.createElement('ul');
        menu.appendChild(style);
        ul.className = 'menu-horizontal';
        ul.innerHTML = '<li class="menu-horizontal-nav"><a class="menu-horizontal-nav-item" href="default.asp">Home</a></li>\
        <li class="menu-horizontal-nav"><a class="menu-horizontal-nav-item" href="news.asp">News</a></li>\
        <li class="menu-horizontal-nav"><a class="menu-horizontal-nav-item" href="contact.asp">Contact</a></li>\
        <li class="menu-horizontal-nav"><a class="menu-horizontal-nav-item" href="about.asp">About</a></li>';
        menu.appendChild(ul);
        this.appendChild(menu);
    }
}

window.customElements.define("menu-horizontal", MenuHorizontal);