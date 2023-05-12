//переменные для рендера корзины //
const cartRender = document.querySelector('.cart__content')
const removeCart = document.querySelectorAll('.cart__box-close')
const cartEmpty = document.querySelector('.cart__empty')
// кнопка оформить заказ //
const checkoutBtn = document.querySelector('.total__right')
//кнопка обратно в корзину с формы офрмления заказа //
const cartReturn = document.querySelector('#cart__return')
// переменные для ренедера финальной модалки
const modalContent = document.querySelector('.modal-box__wrapper')
const modalWrapper = document.querySelector('.modal')


newCartRender()
sum()
emptyCart()


function renderModal(){
    const cartGoods = document.querySelectorAll('.cart__box')
    cartGoods.forEach(function (item) {
        const newProducts = {
            title: item.querySelector('.cart__box-title').innerText,
            count: item.querySelector('.cart__box-counter-number').innerText,
            price: item.querySelector('.cart__box-total').innerText
        }
        const modalBoxContent = 
        `                            
        <div class="modal-box__content-box">
            <div class="modal-box__content-item modal-box__content-item_name">${newProducts.title}</div>
            <div class="modal-box__content-item modal-box__content-item_count">${newProducts.count}</div>
            <div class="modal-box__content-item modal-box__content-item_price">${newProducts.price}</div>
            <div class="modal-box__content-item modal-box__content-item_total">${newProducts.count * newProducts.price}</div>
        </div>
        `

        modalContent.insertAdjacentHTML('beforeend', modalBoxContent)
    })
}

function modalSum(){
    let res = 0
    const allTotal = document.querySelectorAll('.modal-box__content-item_total')
    allTotal.forEach(function(item){
        res += parseInt(item.innerText)
    })
    document.querySelector('.modal-box__total-price').innerText = `Итого: ${res}`
}


//функция паузы //
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//функция для рендера корзины //
function newCartRender() {
    for (let i = 0; i < localStorage.length; i++ ){
        let key = localStorage.key(i)
        

        if (typeof(JSON.parse(localStorage.getItem(key)).count) === 'number') {
            const cartItemHtml = 
            `<div data-cart="${JSON.parse(localStorage.getItem(key)).id}" class="cart__box">
            <img src="${JSON.parse(localStorage.getItem(key)).img}" class="cart__box-img">
            <div class="cart__box-info">
                <h3 class="cart__box-title">${JSON.parse(localStorage.getItem(key)).title}</h3>
                <p class="cart__box-text">${JSON.parse(localStorage.getItem(key)).disc}</p>
            </div>
            <div class="cart__box-counter">
                <button data-action="minus" class="cart__box-counter-item"><img style="pointer-events: none;" width="12px" height="3px" src="./img/icons/minus_icon.svg"></button>
                <div data-counter class="cart__box-counter-number">${JSON.parse(localStorage.getItem(key)).count}</div>
                <button data-action="plus" class="cart__box-counter-item"><img style="pointer-events: none;" width="11px" height="11px" src="./img/icons/plus_icon.svg"></button>
            </div>
            <p class="cart__box-total">${JSON.parse(localStorage.getItem(key)).price}</p>
            <button class="cart__box-close"><img style="pointer-events: none;" width="11px" height="11px" src="./img/icons/plus_icon.svg"></button>
            </div>`

            cartRender.insertAdjacentHTML('beforeend', cartItemHtml)
        }
        
    }
}






//описываем работу каунтера в корзине //
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'plus') {
       const counterCart = event.target.closest('.cart__box-counter');
       const count = counterCart.querySelector('[data-counter]');
       count.innerText = ++count.innerText
       sum()
    }
    if (event.target.dataset.action === 'minus') {
        const counterCart = event.target.closest('.cart__box-counter');
        const count = counterCart.querySelector('[data-counter]');
        if (count.innerText == 1) {
         return ;
        } else {
         count.innerText = --count.innerText
         sum()
        }
     }
})

//очистка корзины и проверка на наличие каких-либо товаров //

window.addEventListener('click', function(event){
    if (event.target.classList[0] === 'cart__box-close') {
        
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            const cartBox = event.target.closest('[data-cart]').dataset.cart
            if (this.localStorage.key(i) == cartBox){
                this.localStorage.removeItem(key)
                event.target.closest('.cart__box').remove();
                emptyCart ()
                sum()
            }
        }


    }
})
// показывать или скрывать блок пустой корзины //
function emptyCart (){
    if (cartRender.children.length <= 1) {
        cartEmpty.style.display = 'flex'
    } else {
        cartEmpty.style.display = 'none'
    }
}

// подсчет суммы товаров //
function sum(){
    const cartItems = document.querySelectorAll('.cart__box')

    let totalPrice = 0;
    

    cartItems.forEach(function(item){
        const amount = item.querySelector('.cart__box-counter-number')       
        const summ = item.querySelector('.cart__box-total')
        const currentPrice = parseInt(amount.innerText) * parseInt(summ.innerText)
        totalPrice += currentPrice     
    })

    const totalBox = document.querySelector('.total__left-amount_sum')
    totalBox.innerText = totalPrice
    freeDelivery()

    function freeDelivery(){
        const freeLeft = document.querySelector('.total__left-delivery_sum')
        let freeBox = 2500 - parseInt(totalBox.innerText)
        if (freeBox < 1){
            freeLeft.innerText = '0'
        } else {
            freeLeft.innerText = freeBox
        }
    }

}



// описываем офомрление заказа //


window.addEventListener('click', function(item){
    // кнопки и поля для анимации офрмления заказа
    const cartList = this.document.querySelector('.cart__list')
    const cartCheckout = this.document.querySelector('.cart__checkout')
    // переменные для работы форм при оформлении заказа //
    // секция доставки //
    const deliveryBtn = this.document.querySelector('.cart__checkout-button-delivery')
    const pickupBtn = this.document.querySelector('.cart__checkout-button-pickup')
    const deliveryForm = this.document.querySelector('#form-delivery')
    // секция оплаты //
    const onlineBtn = this.document.querySelector('.cart__checkout-button-online')
    const cardBtn = this.document.querySelector('.cart__checkout-button-card')
    const cashBtn = this.document.querySelector('.cart__checkout-button-cash')
    const changeForm = this.document.querySelector('#form-change')
    // секция когда доставить //
    const nowBtn = this.document.querySelector('.cart__checkout-button-now')
    const timeBtn = this.document.querySelector('.cart__checkout-button-time')
    const timeForm = this.document.querySelector('#form-time')
    // радио кнопки в форме оформления //
    const callBtn = this.document.querySelector('#call')
    const NoCallBtn = this.document.querySelector('#no-call')
    // кнопка оформить заказ в форме оформления заказа //
    const newOrder = this.document.querySelector('.cart__checkout-button-complete')
    // находим id модального окна //
    const finalModal = this.document.querySelector('#modal')
    // находим кнопку НА ГЛАВНУЮ в модальном окне //
    const goHome = this.document.querySelector('.modal-box__total-home')


    if (item.target == checkoutBtn){
        cartList.classList.add('cart__list_anim')
        sleep(500).then(() => { cartList.style.display = 'none'; });
        sleep(501).then(() => { cartCheckout.style.display = 'block'; });
        cartCheckout.classList.add('cart__checkout_anim')
    }

    if (item.target == cartReturn) {
        cartCheckout.classList.remove('cart__checkout_anim')
        cartList.classList.remove('cart__list_anim')
        cartCheckout.classList.add('cart__checkout_anim-reverse')
        sleep(500).then(() => { cartCheckout.style.display = 'none'; });
        sleep(501).then(() => { cartList.style.display = 'block'; });
        cartList.classList.add('cart__list_anim-reverse')
        sleep(1000).then(() => {  cartCheckout.classList.remove('cart__checkout_anim-reverse') });
        sleep(1000).then(() => { cartList.classList.remove('cart__list_anim-reverse') });     
    }

    if (item.target == deliveryBtn) {
        deliveryBtn.classList.add('cart__checkout-button_active')
        pickupBtn.classList.remove('cart__checkout-button_active')
        deliveryForm.style.display = 'flex'
        deliveryForm.classList.add('cart__checkout-forms_anim')
    }

    if (item.target == pickupBtn) {
        deliveryBtn.classList.remove('cart__checkout-button_active')
        pickupBtn.classList.add('cart__checkout-button_active')
        deliveryForm.style.display = 'none'
    }

    if (item.target == onlineBtn) {
        onlineBtn.classList.add('cart__checkout-button_active')
        cashBtn.classList.remove('cart__checkout-button_active')
        cardBtn.classList.remove('cart__checkout-button_active')
        changeForm.style.display = 'none'
    }

    if (item.target == cardBtn) {
        onlineBtn.classList.remove('cart__checkout-button_active')
        cashBtn.classList.remove('cart__checkout-button_active')
        cardBtn.classList.add('cart__checkout-button_active')
        changeForm.style.display = 'none'
    }

    if (item.target == cashBtn) {
        onlineBtn.classList.remove('cart__checkout-button_active')
        cashBtn.classList.add('cart__checkout-button_active')
        cardBtn.classList.remove('cart__checkout-button_active')
        changeForm.style.display = 'flex'
        changeForm.classList.add('cart__checkout-forms_anim')
    }

    if (item.target == nowBtn) {
        nowBtn.classList.add('cart__checkout-button_active')
        timeBtn.classList.remove('cart__checkout-button_active')
        timeForm.style.display = 'none'
    }

    if (item.target == timeBtn) {
        nowBtn.classList.remove('cart__checkout-button_active')
        timeBtn.classList.add('cart__checkout-button_active')
        timeForm.style.display = 'flex'
        timeForm.classList.add('cart__checkout-forms_anim')
    }

    if (item.target == callBtn) {
        callBtn.classList.add('cart__checkout-forms-radio-dot_active')
        NoCallBtn.classList.remove('cart__checkout-forms-radio-dot_active')
    }

    if (item.target == NoCallBtn) {
        callBtn.classList.remove('cart__checkout-forms-radio-dot_active')
        NoCallBtn.classList.add('cart__checkout-forms-radio-dot_active')
    }

    if (item.target == newOrder) {
        finalModal.style.display = 'block';
        modalWrapper.style.overflow = 'auto';
        document.body.style.overflow = 'hidden'
        renderModal()
        modalSum()
    }

    if (item.target == goHome) {        
        finalModal.style.display = 'none'
        document.body.style.overflow = 'auto'
        this.localStorage.clear()
    }

    
})



