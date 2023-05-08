// НАХОДИМ ВСЕ ЗАГОЛОВКИ ТАБОВ //
const menuTab = document.querySelectorAll('[data-tab]')
// НАХОДИМ ВСЕ КОНТЕНТ БОКСЫ //
const contentBoxes = document.querySelectorAll('[data-tab-content]')
//Находим модальное окно //
const modalCard = document.querySelector(".modal__card")
//находим все карточки товаров
const productCard = document.querySelectorAll(".dishes__box")
//находим кнопку закрытия у modalCard //
const closeModal = document.querySelector('.modal__card-close')


menuTab.forEach(function(item){
    item.addEventListener('click', function(){        

        contentBoxes.forEach(function(item){
            item.classList.add('dishes_hidden')
        })
        
        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('dishes_hidden')
    })
    item.addEventListener('click', function(){
        menuTab.forEach(function(item){
            item.classList.remove('menu__link-active')
        })
        item.classList.add('menu__link-active')
    })
})

productCard.forEach(function(item){
    item.addEventListener('click', function(){
        modalCard.classList.add('modal__card_open')
        document.body.style.overflow = 'hidden'
    })
})

closeModal.addEventListener('click', function(){
    modalCard.classList.remove('modal__card_open')
    document.body.style.overflow = 'auto'
})
