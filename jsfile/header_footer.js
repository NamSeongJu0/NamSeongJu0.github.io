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
// $(document).ready(function() {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() == 0) {
//             $('.scroll-up').fadeIn();
//         } else {
//             $('.scroll-up').fadeOut();
//         }
//     });
// })


// $(document).ready(function() {
//     // 자식 요소들을 선택
//     var children = $('#Porfol > div');
    
//     // 스크롤 이벤트 등록
//     $('#Porfol').scroll(function() {
//       // 현재 스크롤 위치 계산
//       var scrollTop = $(this).scrollTop();
//       var parentHeight = $(this).height();
      
//       // 각 자식 요소에 대해 반복문 실행
//       children.each(function() {
//         var childTop = $(this).offset().top - $(this).parent().offset().top;
//         var childHeight = $(this).height();
        
//         // 자식 요소의 높이와 위치에 따라 border-radius 계산
//         var borderRadius = calculateBorderRadius(scrollTop, parentHeight, childTop, childHeight);
        
//         // border-radius 적용
//         $(this).css('border-radius', borderRadius);
//       });
//     });
    
//     // border-radius를 계산하는 함수
//     function calculateBorderRadius(scrollTop, parentHeight, childTop, childHeight) {
//       var distance = childTop - scrollTop;
//       var threshold = parentHeight / 2;
//       var maxBorderRadius = '0% 0% 0% 0%';
//       var minBorderRadius = '50% 50% 0 0';
      
//       // 스크롤이 일정 높이 이하인 경우
//       if (distance > threshold) {
//         return maxBorderRadius;
//       }

//       else if(distance < threshold){
//         return minBorderRadius
//       }
//       // 스크롤이 일정 높이 이상인 경우
//       else {
//         var ratio = (threshold - distance) / threshold;
//         var borderRadius = 'calc(' + ratio * 50 + '% + ' + (50 - ratio * 50) + '%) calc(' + ratio * 50 + '% + ' + (50 - ratio * 50) + '%) 0 0';
//         return borderRadius;
//       }
//     }
//   });


$(document).ready(function() {
    // HTML에서 클래스 이름이 "box"인 요소들을 선택합니다.
const boxes = document.querySelectorAll('div');

// 각각의 박스에 대해 처리합니다.
boxes.forEach(div => {
  // 함수를 생성하여 스크롤 이벤트에 대한 처리를 수행합니다.
  const handleScroll = () => {
    // 현재 뷰포트 내에서 박스가 얼마나 보이는지 계산합니다.
    const boxTop = div.getBoundingClientRect().top;
    const boxBottom = div.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const boxHeight = div.offsetHeight;
    const offset = 150;

    // 박스가 뷰포트 안에 있을 때 처리합니다.
    if (divTop + divHeight - offset > 0 && divBottom - divHeight + offset < viewportHeight) {
      // 현재 박스의 border-radius를 가져옵니다.
      const currentRadius = parseInt(getComputedStyle(div).borderRadius);

      // border-radius 값을 변경합니다.
      const newRadius = currentRadius < 50 ? currentRadius + 0.5 : 0;
      div.style.borderRadius = `${newRadius}%`;
    }
  };

  // 스크롤 이벤트를 추가합니다.
  window.addEventListener('scroll', handleScroll);
});

})
  

// $(document).ready(function() {
//     const sr1 = ScrollReveal({
//         duration: 3000,
//         delay: 2,
//         easing: 'ease',
//         reset: true,
//       });

//       const sr2 = ScrollReveal({
//         duration: 1000,
//         delay: 2,
//         easing: 'ease',
//         reset: true,
//       });

//       const sr3 = ScrollReveal({
//         duration: 1000,
//         delay: 3,
//         easing: 'ease',
//         reset: true,
//       });

//       const sr4 = ScrollReveal({
//         duration: 3000,
//         delay: 4,
//         easing: 'ease',
//         reset: true,
//       });

//       const sr5 = ScrollReveal({
//         duration: 3000,
//         delay: 5,
//         easing: 'ease',
//         reset: true,
//       });
  
      

//       sr1.reveal('.project1', {
//         beforeReveal: (el) => {
//           el.style.borderRadius = '0%';
//         },
//         beforeReset: (el) => {
//           el.style.borderRadius = '50%';
//         },
//       });

//       sr2.reveal('.project2', {
//         beforeReveal: (el) => {
//           el.style.borderRadius = '0%';
//         },
//         beforeReset: (el) => {
//           el.style.borderRadius = '50%';
//         },
//       });

//       sr3.reveal('.project3', {
//         beforeReveal: (el) => {
//           el.style.borderRadius = '0%';
//         },
//         beforeReset: (el) => {
//           el.style.borderRadius = '50%';
//         },
//       });

//       sr4.reveal('.project4', {
//         beforeReveal: (el) => {
//           el.style.borderRadius = '0%';
//         },
//         beforeReset: (el) => {
//           el.style.borderRadius = '50%';
//         },
//       });

//       sr5.reveal('.project5', {
//         beforeReveal: (el) => {
//           el.style.borderRadius = '0%';
//         },
//         beforeReset: (el) => {
//           el.style.borderRadius = '50%';
//         },
//       });
// })


// $(document).ready(function() {
//     const element = document.querySelector('.project1');

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const elementPosition = element.offsetTop;
//   const distance = elementPosition - scrollPosition;

//   if (distance < window.innerHeight / 2) {
//     element.classList.add('rounded');
//   } else {
//     element.classList.remove('rounded');
//   }
//   console.log(distance)
// });

// })


// $(document).ready(function() {

//     $('.aniview').AniView({
//       animateThreshold: 0,
//       scrollPollInterval: 20,
//       before: function(el) {
//         el.style.transition = 'border-radius 2s ease';
//         el.style.borderRadius = '0%';
//       },
//       after: function(el) {
//         el.style.borderRadius = '50%';
//       }
//     });

//   });
  
  
  



