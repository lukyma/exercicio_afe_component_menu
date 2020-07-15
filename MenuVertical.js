
import GlobalStyles from './GlobalStyles.js';
class MenuVertical extends HTMLElement{
    connectedCallback(){
        const menu = document.createElement("menu-custom");
        const style = document.createElement("style");
        style.setAttribute('type', 'text/css');
        style.innerHTML = GlobalStyles;
        const ul = document.createElement('ul');
        menu.appendChild(style);
        ul.className = 'menu-vertical';
        ul.innerHTML = '<li class="menu-vertical-nav"><a class="menu-vertical-nav-item" href="default.asp">Home</a></li>\
        <li class="menu-vertical-nav"><a class="menu-vertical-nav-item" href="news.asp">News</a></li>\
        <li class="menu-vertical-nav"><a class="menu-vertical-nav-item" href="contact.asp">Contact</a></li>\
        <li class="menu-vertical-nav"><a class="menu-vertical-nav-item" href="about.asp">About</a></li>';
        menu.appendChild(ul);
        this.appendChild(menu);
    }
}

window.customElements.define("menu-vertical", MenuVertical);