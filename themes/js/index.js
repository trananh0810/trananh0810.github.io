$(function(){
    //show menu
    showMenu();
    $(window).scroll(()=>{
        showMenu();
    });
    
    //hiệu ứng đánh chữ
    effectTyping();
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

//hiệu ứng đánh chữ
var effectTyping = () => {
    var content = $('#div-home-body>div:nth-child(3)').text();
    var contentLength = content.length;
    var indexChar = 0;
    var typingSpeed = 50;

    $('#div-home-body>div:nth-child(3)').text("");

    var intervalTyping = setInterval(() => {
        indexChar++;

        var subContent = content.substring(0,indexChar);

        $('#div-home-body>div:nth-child(3)').text(subContent);

        if (indexChar == contentLength){
            clearInterval(intervalTyping);
        }
    }, typingSpeed);
}
