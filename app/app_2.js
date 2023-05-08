// НАХОДИМ ВСЕ ЗАГОЛОВКИ ТАБОВ //
const menuTab = document.querySelectorAll('[data-tab]')
// НАХОДИМ ВСЕ КОНТЕНТ БОКСЫ //
const contentBoxes = document.querySelectorAll('[data-tab-content]')

menuTab.forEach(function(item){
    item.addEventListener('click', function(){        

        contentBoxes.forEach(function(item){
            item.classList.add('dishes_hidden')
        })
        
        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('dishes_hidden')
    })
    // item.addEventListener('click' function(){})
})


