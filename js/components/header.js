export function header() {
    const menu = [
        { text: 'Home', href: '' },
        { text: 'Text', href: 'text' },
        { text: 'Food', href: 'food' },
        { text: 'Darzas', href: 'darzas' },
        { text: 'Header', href: 'header' },
        { text: 'Click', href: 'click' },
    ];

    const basePath = window.location.hostname === 'localhost'
        ? '/'
        : '/dom/';

    const currentPath = window.location.pathname;
    let linksHTML = '';

    for (const link of menu) {
        const fullHref = `${basePath}${link.href}`;
        const active = currentPath === fullHref ? 'active' : '';
        linksHTML += `<a class="link ${active}" href="${fullHref}">${link.text}</a>`;
    }

    const HTML = `
        <header class="main-header">
            <img class="logo" src="${basePath}food/pizza.png" alt="Logo">
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}