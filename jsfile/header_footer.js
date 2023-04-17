function updateTime() {
    let date = new Date();

    let Hours = ('0' + date.getHours()).slice(-2);
    let Minutes = ('0' + date.getMinutes()).slice(-2);
    let Seconds = ('0' + date.getSeconds()).slice(-2);

    let dstring = '현재 시간 ' + Hours + ' : ' + Minutes + ' : ' + Seconds;

    document.getElementsByClassName('time')[0].innerHTML = dstring;
}

setInterval(updateTime, 1000);




  
  
  



