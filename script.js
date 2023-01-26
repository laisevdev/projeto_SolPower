function ativaScroll () {
    const scroll = document.querySelectorAll ('.js-scroll');

    function scrollSuave(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const secao = document.querySelector (href);
        
        secao.scrollIntoView ({
            block: 'start',
            behavior: 'smooth',
        });    
    };

    scroll.forEach((link, index) => {
        link.addEventListener('click', scrollSuave);
    });
    }

ativaScroll();