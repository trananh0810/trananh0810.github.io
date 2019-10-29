$(function(){
    showMenu();
    $(window).scroll(()=>{
        showMenu();
    });
    
})

//show menu
var showMenu = () =>{
    var indexWindow = $(window).scrollTop();

    if (indexWindow >= 100) {
        $('#div-menu').addClass('div-menu-show');
    } else {
        $('#div-menu').removeClass('div-menu-show');
    }

}
