const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    width: 240,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },

    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

function deletePagination  () {
    swiper.destroy(true, true)
    let pagination = document.querySelector('div.swiper-pagination.toggle-points')
    pagination.remove()
}

let brandsBlock = document.querySelector('.brands-desk')

function addExpandButton () {
    let expandButton = document.createElement('button')
    expandButton.classList.add('show-more__button')

    let expandButton__img = document.createElement('img')
    expandButton__img.classList.add('show-more__icon')
    expandButton__img.src = 'icons/expand.svg'
    expandButton.appendChild(expandButton__img)

    let expandButton__text = document.createElement('span')
    expandButton__text.classList.add('show-more__text')
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

// let copiedBrand = document.querySelector(".brand")
// const newBrand = copiedBrand.cloneNode(true)
// console.log(newBrand)
let brandsList = document.querySelector('div.swiper-wrapper.brands-desk__list')

let makeElement = function (name, classForAdd, secondClassForAdd){
    let element = document.createElement(name)
    element.classList.add(classForAdd)
    element.classList.add(secondClassForAdd)
    if (name === 'img') {
        element.src = 'icons/lenovo.svg'
    } else if (name === 'a') {
        element.href = ''
    }
    return element
}

let makeANewBrandCard = function () {

    for (let i = 0; i < 3; i++) {
        let newDiv = makeElement('a', 'brand', 'swiper-slide')
        let newImg = makeElement('img', 'brands__lenovo-logo')
        let newButton = makeElement('button', 'arrow-button')
        newDiv.appendChild(newImg)
        newDiv.appendChild(newButton)
        brandsList.appendChild(newDiv)
    }
}

let delCard = function () {
    for (let i = 0; i < 3; i++) {
        brandsList.removeChild(document.querySelector('.brand:last-child'))
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





