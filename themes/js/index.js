$(function(){
    //show menu
    showMenu();
    $(window).scroll(()=>{
        showMenu();
    });
    
    //hiệu ứng đánh chữ
    effectTyping();

    //run progress bar
    runProgressbar();
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

//chạy progress bar
var runProgressbar = () => {
    var markJava        = 60;
    var markHtml        = 50;
    var markCss         = 50;
    var markPts         = 50;
    var markJquery      = 50;
    var markBootstrap   = 50;

    runProgressbarItem('#pgb-java', markJava);
    runProgressbarItem('#pgb-html', markHtml);
    runProgressbarItem('#pgb-css', markCss);
    runProgressbarItem('#pgb-pts', markPts);
    runProgressbarItem('#pgb-jquery', markJquery);
    runProgressbarItem('#pgb-bootstrap', markBootstrap);
}

var runProgressbarItem = (selector, mark) => {
    var markRun = 0;
    setInterval(() => {
        markRun++;

        if (markRun <= mark){
            $(selector).css('width', markRun + '%');
        }
    }, 10);
}
