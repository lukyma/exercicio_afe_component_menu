const menu;
const link;
const ul;
class MenuElement extends HTMLElement{
    connectedCallback(){
        menu = document.createElement("menu");
        link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "Menu.css");
        menu.appendChild(link);
        ul = document.createElement('ul');
    }
}