export function filter() {
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