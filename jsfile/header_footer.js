function updateTime() {
    let date = new Date();

    let Hours = ('0' + date.getHours()).slice(-2); 
    let Minutes = ('0' + date.getMinutes()).slice(-2);
    let Seconds = ('0' + date.getSeconds()).slice(-2); 

    let dstring = '현재 시간 ' + Hours + ' : ' + Minutes + ' : ' + Seconds;

    document.getElementsByClassName('time')[0].innerHTML = dstring;
}

setInterval(updateTime, 1000);



// 스크롤 스크립트
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
})


