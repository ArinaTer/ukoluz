export function accordion() {
    const accordions = document.querySelectorAll('.accordion__item');

    accordions.forEach(accor => {
        let accorBtn = accor.querySelector('.accordion__item-head')
        
        accorBtn.addEventListener('click', (e) => {
            accordions.forEach(accor => accor.classList.remove('active') )
            accor.classList.add('active')
        });
    });
}