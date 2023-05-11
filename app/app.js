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
//находим кнопки корзины на странице //
const cartButton = document.querySelector('.dishes__box-check')



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




window.addEventListener('click', function(event){

    if (event.target.dataset.cart == 'add'){

        const addCartBtn = event.target.querySelector('#icon_cart')
        const addOkBtn = event.target.querySelector('#icon_ok')
        addCartBtn.classList.add('dishes__box-btn_hide')
        addOkBtn.classList.remove('dishes__box-btn_hide')

       const box = event.target.closest('.dishes__box')
       const productInfo = {
        title: box.querySelector('.dishes__box-text').innerText,
        count: 1,
        price: box.querySelector('.dishes__box-price').innerText,
        id: box.dataset.id,
        img: box.querySelector('.dishes__box-img').getAttribute('src'),
        disc: box.querySelector('.dishes__box-disc').innerText

       }
       this.localStorage.setItem(productInfo.id, JSON.stringify(productInfo));       
    }
})


