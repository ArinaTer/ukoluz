/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/specialists/filter.js
function filter() {
    const filter = document?.querySelector('.filter')
    if (filter) {
        const filterBtn = document.querySelector('.filter__btn')
        const filterSelect = filter.querySelectorAll('.filter__select')
        const filterSelectVal = filter.querySelectorAll('.filter__select-val')

        filterBtn.addEventListener('click', (e) => {
            e.preventDefault()
        })

        filterSelect.forEach((select, i, arr) => {
            filterSelectVal[i].addEventListener('click', () => {
                if (!select.classList.contains('active')) {
                    arr.forEach(item => {
                        item.classList.remove('active')
                    })
                    select.classList.add('active')
                } else {
                    select.classList.remove('active')
                }
            })
            const filterOptionVal = select.querySelectorAll('.filter__option-val')
            filterOptionVal.forEach(option => {
                option.addEventListener('click', () => {
                    filterOptionVal.forEach(el => {
                        el.classList.remove('active')
                    })
                    option.classList.add('active')
                    const parent = option.closest('.filter__select')
                    const selectVal = parent.querySelector('.filter__select-val')
                    selectVal.innerHTML = option.innerHTML
                    parent.classList.remove('active')
                })
            })
        })
    }

    // window.addEventListener('click', (e) => {
    //     if (filterSelect.includes('active')) {
    //         filterSelect.forEach((select) => {
    //             select.classList.remove('active')
    //         })
    //     }
    // })
}
;// CONCATENATED MODULE: ./src/js/specialists/index.js

function specialists() {
    filter()
}
;// CONCATENATED MODULE: ./src/js/sections/accordion.js
function accordion() {
    const accordions = document.querySelectorAll('.accordion__item');

    accordions.forEach(accor => {
        let accorBtn = accor.querySelector('.accordion__item-head')
        
        accorBtn.addEventListener('click', (e) => {
            accordions.forEach(accor => accor.classList.remove('active') )
            accor.classList.add('active')
        });
    });
}
;// CONCATENATED MODULE: ./src/js/components/header.js
function header() {
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

;// CONCATENATED MODULE: ./src/js/app.js




window.addEventListener("load", () => {
    header()
    accordion()
    specialists()

    // Zoom Site Disabled
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gesturechange', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gestureend', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });
})
/******/ })()
;