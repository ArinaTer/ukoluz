export function header() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.header__nav-link');
    const burger = document.querySelector(".header__burger")

    // window.addEventListener('scroll', () => {
    //     header.classList.toggle('scrolled-header', window.scrollY > 50);
    // });

    burger.addEventListener('click', () => {
        document.body.classList.toggle('header-active-mobile');
        header.classList.toggle('header-open-mobile');
        header.classList.toggle('header-close-mobile', !header.classList.contains('header-open-mobile'));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            setTimeout(() => {
                document.body.classList.remove('header-active-mobile');
                header.classList.remove('header-open-mobile');
                header.classList.add('header-close-mobile');
                
            }, 550);
        });
    });

    // function setActiveLink() {
    //     const currentPath = window.location.pathname + window.location.hash;

    //     navLinks.forEach(link => {
    //         const linkHref = link.getAttribute('href');

    //         if (currentPath.includes(linkHref)) {
    //             link.classList.add('active');
    //         } else {
    //             link.classList.remove('active');
    //         }
    //     });
    // }

    // setActiveLink();



    // window.addEventListener('hashchange', setActiveLink);
}
