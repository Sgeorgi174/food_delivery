const productContainer = document.querySelector('#products-container')

getProducts()

async function getProducts() {
    const response = await fetch('./json/dishes_cold.json');
    const productsArray = await response.json();
    renderProducts(productsArray)
}

function renderProducts(productsArray){
    productsArray.forEach(function(item){
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
            <button class="dishes__box-checkout">В корзину<img src="./img/icons/cart_icon.svg"> </button>
        </div>                    
    </div>`;
    productContainer.insertAdjacentHTML('beforeend', productHTML)
    })
}




