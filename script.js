function ativaLinks () {
    const linksCabecalho = document.querySelectorAll ('.menu-cabecalho li');

    function atvLinkCabecalho (event) {
        event.preventDefault();
        linksCabecalho.forEach ((links) => {
        links.removeAttribute ('class', 'LINK-ATIVO');
        })
        event.currentTarget.setAttribute ('class', 'LINK-ATIVO');
    };

    linksCabecalho.forEach ((links) => {
        links.addEventListener ('click', atvLinkCabecalho);
    });
}

ativaLinks();

const 