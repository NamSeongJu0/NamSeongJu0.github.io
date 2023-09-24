// // 애니메이션이 끝날 때 호출할 함수
// function hideSpans() {
//     var spans = document.querySelectorAll('span');
//     for (var i = 0; i < spans.length; i++) {
//       spans[i].style.display = 'none';
//     }
//   }

// $(document).ready(function () {
//     const smoky = document.querySelector('.smoky');
//     const body = document.querySelector('body');

//     // 애니메이션 실행 시 active 클래스 추가
//     smoky.classList.add('active');

//     // 애니메이션 종료 후 active 클래스 제거, body에서 no-scroll 클래스 제거
//     smoky.addEventListener('animationend', () => {
//         smoky.classList.remove('active');
//         body.classList.remove('no-scroll');
//     });

//     // body에 no-scroll 클래스 추가
//     body.classList.add('no-scroll');


//     // 애니메이션 종료 후 smoky 요소 숨기기
//     smoky.addEventListener('animationend', () => {
//         smoky.parentNode.removeChild(smoky);
//         body.classList.remove('no-scroll');
//     });
      

// });

// // 페이지가 리로드 될때마다 스모키 효과 실행
// window.addEventListener('load', function() {
//   var smokyElement = document.querySelector('.smoky');

//   // `.smoky` 클래스를 추가하여 요소를 화면에 표시합니다.
//   smokyElement.style.display = 'block';

//   // `smoky` 클래스를 토글하고 애니메이션 효과를 재생합니다.
//   function toggleSmokyEffect() {
//     smokyElement.classList.toggle('active');
//   }

//   // 페이지 로딩 후 1초 후에 `toggleSmokyEffect` 함수를 실행합니다.
//   setTimeout(toggleSmokyEffect, 1000);
// });

  
