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
//находим кнопки каунтера на странице



// ТАБЫ ПУНКТОВ МЕНЮ И АКТИВНЫХ ЭЛЕМЕНТОВ МЕНЮ //
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


// ВЫЗОВ МОДАЛЬНОГО ОКНА //
productCard.forEach(function(item){
    if (item == null) {
        return ;
    } else {
        item.addEventListener('click', function(){
            modalCard.classList.add('modal__card_open')
            document.body.style.overflow = 'hidden'
        })
    }
})

closeModal.addEventListener('click', function(){
    modalCard.classList.remove('modal__card_open')
    document.body.style.overflow = 'auto'
})


//описываем каунтер в корзине //
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'plus') {
       const counterCart = event.target.closest('.cart__box-counter');
       const count = counterCart.querySelector('[data-counter]');
       count.innerText = ++count.innerText
    }
    if (event.target.dataset.action === 'minus') {
        const counterCart = event.target.closest('.cart__box-counter');
        const count = counterCart.querySelector('[data-counter]');
        if (count.innerText == 1) {
         return ;
        } else {
         count.innerText = --count.innerText
        }
     }
})