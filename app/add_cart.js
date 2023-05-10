const cartRender = document.querySelector('.cart__content')
const removeCart = document.querySelectorAll('.cart__box-close')


newCartRender()

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

window.addEventListener('click', function(event){
    if (event.target.classList[0] === 'cart__box-close') {
        
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            const cartBox = event.target.closest('[data-cart]').dataset.cart
            if (this.localStorage.key(i) == cartBox){
                this.localStorage.removeItem(key)
                event.target.closest('.cart__box').style.display = 'none';
            }
        }


    }
})