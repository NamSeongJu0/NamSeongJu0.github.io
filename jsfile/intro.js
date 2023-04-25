// 애니메이션이 끝날 때 호출할 함수
function hideSpans() {
    var spans = document.querySelectorAll('span');
    for (var i = 0; i < spans.length; i++) {
      spans[i].style.display = 'none';
    }
  }

$(document).ready(function () {
    const smoky = document.querySelector('.smoky');
    const body = document.querySelector('body');

    // 애니메이션 실행 시 active 클래스 추가
    smoky.classList.add('active');

    // 애니메이션 종료 후 active 클래스 제거, body에서 no-scroll 클래스 제거
    smoky.addEventListener('animationend', () => {
        smoky.classList.remove('active');
        body.classList.remove('no-scroll');
    });

    // body에 no-scroll 클래스 추가
    body.classList.add('no-scroll');


    // 애니메이션 종료 후 smoky 요소 숨기기
    smoky.addEventListener('animationend', () => {
        smoky.parentNode.removeChild(smoky);
        body.classList.remove('no-scroll');
    });
      

});
  
