const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    width: 240,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

let brandsBlock = document.querySelector('.brands-desk')
let brandsList = document.querySelector('ul.swiper-wrapper.brands-desk__list')

function deletePagination  () {
    swiper.destroy(true, true)
    let pagination = document.querySelector('div.swiper-pagination.toggle-points')
    pagination.remove()
}

function addExpandButton () {
    let expandButton = makeElement('nutton', 'show-more__button' )

    let expandButton__img = makeElement('img', 'show-more__icon')
    expandButton.appendChild(expandButton__img)

    let expandButton__text = makeElement('span', 'show-more__text' )
    expandButton__text.textContent = 'Показать всё'
    expandButton.appendChild(expandButton__text)

    brandsBlock.appendChild(expandButton)
    return expandButton
}

function hideMore () {
    let text = document.querySelector('.show-more__text')
    let img = document.querySelector('.show-more__icon')
    let btn = document.querySelector('.show-more__button')

    btn.addEventListener('click', () => {
        if (text.textContent === 'Показать всё') {
            if (window.innerWidth >= 984) {
                makeANewBrandCard()
            }
            text.textContent = 'Скрыть'
            img.classList.replace('show-more__icon', 'show-more__icon--reverse')
            brandsBlock.style.height = '364px'
        } else if (text.textContent === 'Скрыть') {
            if (window.innerWidth >= 984) {
                delCard()
            }
            text.textContent = 'Показать всё'
            img.classList.replace('show-more__icon--reverse', 'show-more__icon')
            brandsBlock.style.height = null
        }
    })
}

let makeElement = function (name, classForAdd){
    let element = document.createElement(name)
    element.classList.add(classForAdd)
    if (name === 'img') {
        element.src = 'icons/lenovo.png'
        if (classForAdd === 'show-more__icon') {
            element.src = 'icons/expand.svg'
        }
    } else if (name === 'a') {
        element.href = ''
    }
    return element
}

let makeANewBrandCard = function () {

    for (let i = 0; i < 3; i++) {
        let newLi = makeElement('li', 'swiper-slide')
        let newDiv = makeElement('a', 'brand')
        let newImg = makeElement('img', 'brands__lenovo-logo')
        let newButton = makeElement('button', 'arrow-button')
        newDiv.appendChild(newImg)
        newDiv.appendChild(newButton)
        newLi.appendChild(newDiv)
        brandsList.appendChild(newLi)
    }

}

let delCard = function () {
    for (let i = 0; i < 3; i++) {
        brandsList.removeChild(document.querySelector('.swiper-slide:last-child'))
    }
}

if (window.innerWidth >= 768) {
    deletePagination()
    addExpandButton()
    hideMore()
} else if (window.innerWidth >= 1120) {
    deletePagination()
    addExpandButton()
    hideMore()
}





