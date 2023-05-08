const closeBtn = document.getElementById("modal-close")

window.addEventListener('click', function(event){
    if (event.target.className == "cold-dishes__box-img"){
        const openCard = event.target.closest('.cold-dishes__box');
        document.getElementById('my-modal').classList.add('modal__card_open')
    }
});


closeBtn.addEventListener('click', function(){
    document.getElementById('my-modal').classList.remove('modal__card_open')
});

window.addEventListener('click', function(event){
    if (event.target.className == 'menu__link') {
        const activeItem = event.target.closest('.menu__link');        
        activeItem.classList.add('menu__link-active')        
    }
})


