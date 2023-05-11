const productContainerCold = document.querySelector('#products-container-cold')
const productContainerHot = document.querySelector('#products-container-hot')
const productContainerMeat = document.querySelector('#products-container-meat')
const productContainerSoup = document.querySelector('#products-container-soup')
const productContainerFish = document.querySelector('#products-container-fish')
const productContainerBbq = document.querySelector('#products-container-bbq')
const productContainerSpecial = document.querySelector('#products-container-special')
const productContainerDrinks = document.querySelector('#products-container-drinks')

getProducts()

async function getProducts() {
    const responseCold = await fetch('./json/dishes_cold.json');
    const productsArrayCold = await responseCold.json();
    renderProductsCold(productsArrayCold)

    const responseHot = await fetch('./json/dishes_hot.json');
    const productsArrayHot = await responseHot.json();
    renderProductsHot(productsArrayHot)

    const responseMeat = await fetch('./json/dishes_meat.json');
    const productsArrayMeat = await responseMeat.json();
    renderProductsMeat(productsArrayMeat)

    const responseSoup = await fetch('./json/dishes_soup.json');
    const productsArraySoup = await responseSoup.json();
    renderProductsSoup(productsArraySoup)

    const responseFish = await fetch('./json/dishes_fish.json');
    const productsArrayFish = await responseFish.json();
    renderProductsFish(productsArrayFish)

    const responseBbq = await fetch('./json/dishes_bbq.json');
    const productsArrayBbq = await responseBbq.json();
    renderProductsBbq(productsArrayBbq)

    const responseSpecial = await fetch('./json/dishes_special.json');
    const productsArraySpecial = await responseSpecial.json();
    renderProductsSpecial(productsArraySpecial)

    const responseDrinks = await fetch('./json/dishes_drinks.json');
    const productsArrayDrinks = await responseDrinks.json();
    renderProductsDrinks(productsArrayDrinks)
    
}

function renderProductsCold(productsArrayCold){
    productsArrayCold.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/cold/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerCold.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsHot(productsArrayHot){
    productsArrayHot.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/hot/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerHot.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsMeat(productsArrayMeat){
    productsArrayMeat.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/meat/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerMeat.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsSoup(productsArraySoup){
    productsArraySoup.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/soup/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerSoup.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsFish(productsArrayFish){
    productsArrayFish.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/fish/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerFish.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsBbq(productsArrayBbq){
    productsArrayBbq.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/bbq/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerBbq.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsSpecial(productsArraySpecial){
    productsArraySpecial.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/special/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
            <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
            <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
        </button>
        </div>                    
    </div>`;
    productContainerSpecial.insertAdjacentHTML('beforeend', productHTML)
    })
}

function renderProductsDrinks(productsArrayDrinks){
    productsArrayDrinks.forEach(function(item){
        const productHTML = `                    
        <div data-id="${item.id}" class="dishes__box">
        <img class="dishes__box-img" src="./img/products/drinks/${item.imgSrc}" alt="dish">
        <div class="dishes__box-info">
            <div class="dishes__box-text">${item.title}</div>
        </div>
        <p class="dishes__box-disc">${item.disc}</p>
        <div class="dishes__box-weight">${item.weight}</div>
        <div class="dishes__box-check">
            <div class="dishes__box-price">${item.price}</div>
            <button data-cart="add" class="dishes__box-checkout">В корзину
                <img id="icon_cart" class="dishes__box-btn" style="pointer-events: none;" src="./img/icons/cart_icon.svg">
                <img id="icon_ok" class="dishes__box-btn dishes__box-btn_hide" width="40px" height="40px" style="pointer-events: none;" src="./img/icons/ok_icon.svg">
            </button>
        </div>                    
    </div>`;
    productContainerDrinks.insertAdjacentHTML('beforeend', productHTML)
    })
}




