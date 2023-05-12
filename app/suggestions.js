$(document).ready(function(){
    $("#address").suggestions({
        token: "05e9a10d970eb9c462c947012735ac85688dcf5c",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
})